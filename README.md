# WebAR-Based Indoor Navigation System for Smart Campus Environments

## Course Information
**Course Code:** CSI4005  
**Course Title:** Augmented Reality & Virtual Reality  
**School:** School of Computer Science and Engineering (SCOPE)  

## Project Team
- **Kurapati Goutham (22MID0088)**  
- **Gnaneshwar (22MID0224)**  
- **Gokkul Raj (22MID0243)**  
- **Chaarulatha J (22MID0317)**  

**Under the Guidance of:**  
Dr. Arpan Garai  

---

## Introduction
Navigating large and complex indoor environments such as campuses, hospitals, and malls is often difficult for first-time visitors. Traditional GPS-based navigation fails indoors, while QR codes, Bluetooth beacons, or app-based systems are costly and limit accessibility.  

This project aims to design a **cost-effective, app-free, and markerless WebAR navigation system** that delivers real-time directional guidance directly through a mobile browser. By leveraging **Immersal’s Visual Positioning System (VPS)** and WebAR frameworks, users can localize instantly and follow AR overlays without installing any app.  

---

## Motivation
- To remove the dependency on GPS, QR codes, or dedicated apps.  
- To build a **universally accessible system** that works in any browser.  
- To create an **inclusive and scalable solution** for smart campus environments.  

---

## Novelty
- **Browser-first, markerless approach** using Progressive Web App (PWA).  
- **Immersal VPS integration** for precise indoor localization.  
- Built with **Mattercraft, A-Frame, and Three.js** for lightweight 3D rendering.  
- Cross-device compatibility without requiring additional infrastructure.  

---

## Accuracy of the Outcome
Testing confirmed reliable real-time localization. Directional arrows and overlays consistently aligned with the environment. Performance metrics, such as localization precision, route completion, and cross-device usability, validated the robustness of the system:contentReference[oaicite:1]{index=1}.  

---

## Literature Review Highlights
- **DimSplat (2025, IEEE VR Workshops):** Proved high-performance AR is feasible in browsers.  
- **VPS Technology (ISEEE, 2010):** Showed centimeter-level indoor localization.  
- **Omniverse Indoor Mapping (NTSUST, 2023):** Emphasized accuracy in 3D reconstruction.  
- **Occlusion-Aware AR (ICOSEC, 2024):** Future path for more realistic AR overlays.  

---

## Applied Methods
1. **Mapping the Environment** – Used Immersal Mapper App, uploaded scans to Immersal Cloud for map IDs.  
2. **Building the WebAR Scene** – Developed with Mattercraft, Three.js, HTML, CSS, and Immersal SDK.  
3. **Markerless Localization** – Real-time position/orientation with VPS, no markers required.  
4. **3D Directional Guidance** – Rendered arrows, labels, and distance markers; multi-floor prompts included.  
5. **Real-Time Localization** – Combined Visual-Inertial Odometry (VIO) with VPS corrections for accuracy:contentReference[oaicite:2]{index=2}.  

---

## Features
- Markerless localization (no QR codes/beacons)  
- Real-time 3D navigation cues (arrows, labels)  
- Cross-platform (Android & iOS browsers)  
- Progressive Web App (PWA) support  
- Scalable for campuses, malls, hospitals, and exhibitions  

---