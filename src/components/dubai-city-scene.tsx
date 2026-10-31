"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type DubaiCitySceneProps = { className?: string };

/**
 * Creates high-resolution procedural Arabic calligraphy texture for Museum of the Future.
 */
function createCalligraphyTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Brushed titanium backdrop
  ctx.fillStyle = "#cbd5e1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Calligraphic letterforms & architectural glass windows
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 46px 'Amiri', 'Scheherazade New', 'Traditional Arabic', serif";
  ctx.textBaseline = "middle";

  const quotes = [
    "المستقبل ملك لمن يستطيع تخيله وتصميمه وتنفيذه",
    "دبي مدينة المستقبل ووجهة الإلهام والإبداع",
    "رؤية القيادة وطموح يعانق السماء والأمل",
    "متحف المستقبل صرح حضاري وأيقونة عالمية",
    "ابتكار مستمر وتصميم يغير العالم للأفضل",
  ];

  for (let row = 0; row < 6; row++) {
    const y = 45 + row * 78;
    const text = quotes[row % quotes.length];
    for (let col = 0; col < 3; col++) {
      const x = col * 720 + (row % 2 ? 80 : 0);
      ctx.fillText(text, x, y);
    }
  }

  // Intricate laser-cut window slits
  ctx.fillStyle = "#1e293b";
  for (let i = 0; i < 220; i++) {
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    const rw = 25 + Math.random() * 55;
    const rh = 4 + Math.random() * 8;
    ctx.fillRect(rx, ry, rw, rh);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 1);
  return texture;
}

export function DubaiCityScene({ className = "" }: DubaiCitySceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = null;

    // Perspective Camera: zoomed out perfectly to frame entire Dubai skyline, dunes & water
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 150);
    camera.position.set(0, 3.2, 25);
    camera.lookAt(0, 2.2, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.95;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%;pointer-events:none;";
    mount.appendChild(renderer.domElement);

    // --- RADIANT SUN & DESERT LIGHTING ---
    const sun = new THREE.DirectionalLight(0xffedd5, 4.6);
    sun.position.set(18, 26, 20);
    scene.add(sun);

    scene.add(new THREE.HemisphereLight(0x7dd3fc, 0xf59e0b, 2.8));
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.4);
    rimLight.position.set(-20, 16, 18);
    scene.add(rimLight);

    const sandBounce = new THREE.DirectionalLight(0xfbbf24, 2.4);
    sandBounce.position.set(0, -3, 14);
    scene.add(sandBounce);

    const world = new THREE.Group();
    scene.add(world);

    // --- 1. REAL 3D ROLLING DESERT SAND DUNES ---
    const sandWidth = 68;
    const sandDepth = 34;
    const sandGeo = new THREE.PlaneGeometry(sandWidth, sandDepth, 90, 60);
    sandGeo.rotateX(-Math.PI / 2);

    const pos = sandGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // Authentic harmonic rolling desert dunes
      let y =
        Math.sin(x * 0.15 + z * 0.1) * 0.6 +
        Math.cos(x * 0.08 - z * 0.13) * 0.45 +
        Math.sin(x * 0.25) * 0.2;

      // Swell up on right (x > 2.5) to cover bottom 25% of the calculator phone screen
      if (x > 2.5 && z > -2) {
        y += Math.min(2.0, ((x - 2.5) / 5) * 1.6);
      }

      // Drop towards bottom-left corner for crystal turquoise Persian Gulf water
      if (x < -8 && z > 2) {
        y -= Math.min(2.2, (-x - 8) / 4);
      }

      // Base height at y = -1.2 so dunes cover lower 30% of hero
      pos.setY(i, y - 1.2);
    }
    sandGeo.computeVertexNormals();

    const sandMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Rich golden desert sand
      roughness: 0.85,
      metalness: 0.04,
    });
    const sandMesh = new THREE.Mesh(sandGeo, sandMat);
    sandMesh.position.set(0, 0, 1);
    world.add(sandMesh);

    // --- 2. 3D PERSIAN GULF COASTAL WATER AT CORNER ---
    const waterGeo = new THREE.PlaneGeometry(24, 18, 32, 32);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Crystal turquoise water
      roughness: 0.08,
      metalness: 0.45,
      transparent: true,
      opacity: 0.95,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.set(-16, -2.4, 7);
    world.add(waterMesh);

    // --- 3. 3D DUBAI BUILDINGS (ON TOP OF THE SAND!) ---
    const city = new THREE.Group();
    // Positioned at y = -1.2 so foundations rest cleanly ON the sand surface
    city.position.set(0, -1.2, 0);
    world.add(city);

    // Shared Materials
    const calligraphyTexture = createCalligraphyTexture();
    const motfTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.92,
      map: calligraphyTexture,
    });

    const blueGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.1,
      metalness: 0.92,
    });

    const cyanGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.9,
    });

    const whiteTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.8,
    });

    const warmStoneMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.35,
      metalness: 0.5,
    });

    // Window instancing
    const dummy = new THREE.Object3D();
    const winGeo = new THREE.BoxGeometry(0.14, 0.2, 0.02);
    const winMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.95,
      roughness: 0.1,
    });

    function addWindowGrid(target: THREE.Group, w: number, h: number, d: number) {
      const cols = Math.max(2, Math.floor(w / 0.4));
      const rows = Math.max(4, Math.floor(h / 0.55));
      const count = Math.min(cols * rows, 70);
      const mesh = new THREE.InstancedMesh(winGeo, winMat, count);
      mesh.position.set(0, 0, d / 2 + 0.02);

      let idx = 0;
      for (let r = 0; r < rows && idx < count; r++) {
        for (let c = 0; c < cols && idx < count; c++) {
          const wx = -w / 2 + ((c + 0.5) * w) / cols;
          const wy = ((r + 0.5) * h) / rows;
          dummy.position.set(wx, wy, 0);
          dummy.updateMatrix();
          mesh.setMatrixAt(idx++, dummy.matrix);
        }
      }
      mesh.instanceMatrix.needsUpdate = true;
      target.add(mesh);
    }

    // A. MUSEUM OF THE FUTURE (PERFECTLY CENTERED IN THE HERO OPENING)
    const motfGroup = new THREE.Group();
    // Positioned at x = 0.4, y = 1.3 so the entire iconic ring is clearly visible
    motfGroup.position.set(0.4, 1.3, 1.2);

    const motfTorusGeo = new THREE.TorusGeometry(1.8, 0.62, 36, 120);
    const motfRing = new THREE.Mesh(motfTorusGeo, motfTitaniumMat);
    motfRing.scale.set(1.68, 1.15, 0.72);
    motfRing.rotation.x = Math.PI * 0.08;
    motfRing.rotation.y = -Math.PI * 0.12;
    motfGroup.add(motfRing);

    // Green landscaped podium mound resting on the sand
    const moundGeo = new THREE.CylinderGeometry(2.5, 3.5, 0.8, 36);
    const moundMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.85,
    });
    const mound = new THREE.Mesh(moundGeo, moundMat);
    mound.position.y = -1.0;
    motfGroup.add(mound);

    city.add(motfGroup);

    // B. LEFT CLASSIC DUBAI SKYSCRAPER (Stepped luxury tower from Ref Image 1)
    const leftTower = new THREE.Group();
    // Positioned at x = -6.8 to frame the left margin of the hero
    leftTower.position.set(-6.8, 0, -0.5);

    // Tier 1 Base
    const l1H = 4.2;
    const l1 = new THREE.Mesh(new THREE.BoxGeometry(2.0, l1H, 1.6), warmStoneMat);
    l1.position.y = l1H / 2;
    leftTower.add(l1);
    addWindowGrid(leftTower, 1.8, l1H, 1.6);

    // Tier 2 Middle
    const l2H = 3.6;
    const l2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, l2H, 1.3), blueGlassMat);
    l2.position.y = l1H + l2H / 2;
    leftTower.add(l2);

    // Tier 3 Top
    const l3H = 2.8;
    const l3 = new THREE.Mesh(new THREE.BoxGeometry(1.2, l3H, 1.0), blueGlassMat);
    l3.position.y = l1H + l2H + l3H / 2;
    leftTower.add(l3);

    // Pyramid Crown
    const crownGeo = new THREE.ConeGeometry(0.9, 1.4, 4);
    crownGeo.rotateY(Math.PI / 4);
    const lCrown = new THREE.Mesh(crownGeo, whiteTitaniumMat);
    lCrown.position.y = l1H + l2H + l3H + 0.7;
    leftTower.add(lCrown);

    // Pinnacle Spire with aircraft beacon
    const lSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.1, 2.6, 8), whiteTitaniumMat);
    lSpire.position.y = l1H + l2H + l3H + 1.4 + 1.3;
    leftTower.add(lSpire);

    const leftBeacon = new THREE.PointLight(0xef4444, 2.8, 12);
    leftBeacon.position.y = l1H + l2H + l3H + 4.0;
    leftTower.add(leftBeacon);

    // Flanking Left Glass Office Tower
    const flankLeft = new THREE.Mesh(new THREE.BoxGeometry(1.8, 5.2, 1.4), blueGlassMat);
    flankLeft.position.set(-2.0, 2.6, -0.4);
    leftTower.add(flankLeft);

    city.add(leftTower);

    // C. RIGHT CURVED BLUE GLASS TOWERS (From Ref Image 1)
    const rightTowers = new THREE.Group();
    // Positioned at x = 6.2 behind the calculator phone screen
    rightTowers.position.set(6.2, 0, -1.0);

    // Cylindrical angled hotel skyscraper
    const r1H = 9.2;
    const r1 = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.4, r1H, 28, 1, false, 0, Math.PI * 1.6),
      cyanGlassMat
    );
    r1.position.set(-0.8, r1H / 2, 0);
    r1.rotation.y = Math.PI / 3;
    rightTowers.add(r1);

    const r1Top = new THREE.Mesh(new THREE.ConeGeometry(1.1, 2.0, 28), whiteTitaniumMat);
    r1Top.position.set(-0.8, r1H + 1.0, 0);
    rightTowers.add(r1Top);

    // Stepped blue glass high-rise
    const r2H = 7.6;
    const r2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, r2H, 1.5), blueGlassMat);
    r2.position.set(1.2, r2H / 2, 0.3);
    rightTowers.add(r2);
    addWindowGrid(rightTowers, 1.6, r2H, 1.5);

    city.add(rightTowers);

    // D. BACKGROUND SLENDER SKYLINE TOWERS
    const bgSkyline = new THREE.Group();
    bgSkyline.position.set(0, 0, -5.0);

    function addBgTower(x: number, w: number, h: number, d: number) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blueGlassMat);
      mesh.position.set(x, h / 2, 0);
      bgSkyline.add(mesh);
    }

    addBgTower(-10.5, 1.8, 8.5, 1.4);
    addBgTower(-3.8, 1.6, 9.8, 1.5);
    addBgTower(3.2, 1.8, 9.4, 1.5);
    addBgTower(9.5, 2.0, 8.2, 1.6);

    city.add(bgSkyline);

    // --- ANIMATION LOOP ---
    let frameId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 3.2;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = nx * 0.6;
      mouseY = ny * 0.3;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      renderer.render(scene, camera);
    };

    const animate = (time = 0) => {
      targetCamX = mouseX + Math.sin(time * 0.0003) * 0.25;
      targetCamY = 3.2 + mouseY * 0.35 + Math.cos(time * 0.0004) * 0.1;

      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.lookAt(0, 2.2, 0);

      leftBeacon.intensity = (Math.sin(time * 0.008) + 1) * 2.2;
      waterMesh.position.y = -2.4 + Math.sin(time * 0.0018) * 0.04;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    window.addEventListener("resize", resize, { passive: true });

    resize();
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
      renderer.dispose();
      renderer.domElement.remove();
      calligraphyTexture.dispose();
    };
  }, []);

  return (
    <div aria-hidden="true" className={`relative h-full w-full select-none ${className}`}>
      <div ref={mountRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}