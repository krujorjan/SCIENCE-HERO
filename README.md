# Science Quiz Hero

เว็บแอป/PWA แบบทดสอบวิทยาศาสตร์ภาษาไทย ป.4–ม.3 ใช้ได้แบบ local-first บนโทรศัพท์ แท็บเล็ต และคอมพิวเตอร์ รายละเอียดข้อจำกัดและแผนต่อยอดอยู่ใน [REVIEW.md](REVIEW.md)

## เริ่มใช้งาน

```bash
npm install
npm run dev
npm test
npm run test:e2e
```

ครูนำเข้า CSV ด้วยหัวคอลัมน์ `id,grade,level,topic,question,option1,option2,option3,option4,correct` โดย `level` เป็น 5–7 และ `correct` เป็น 1–4 ระบบตรวจ ID และ normalized SHA-256 hash ก่อนบันทึก

## Firebase (ไม่บังคับ)

คัดลอก `.env.example` เป็น `.env.local` และกรอกค่าจาก Firebase Console หากไม่กำหนดค่า แอปทำงานด้วย IndexedDB ต่อไปโดยอัตโนมัติ ควรกำหนด Authentication และ Firestore Security Rules ก่อนใช้งานจริง

## Deploy: GitHub Pages

1. ถ้า deploy ใต้ path ของ repository ให้ตั้ง `base` ใน `vite.config.js` ให้ตรงชื่อ repository (โดเมนแบบ custom ใช้ `/`)
2. รัน `npm ci && npm run build`
3. ตั้ง GitHub Actions ให้อัปโหลดโฟลเดอร์ `dist` ด้วย `actions/upload-pages-artifact` และ deploy ด้วย `actions/deploy-pages`
4. PWA ต้องให้บริการผ่าน HTTPS และควรตรวจ path ของ manifest/service worker หลัง deploy

## Deploy: Firebase Hosting

```bash
npm install -g firebase-tools
npm run build
firebase login
firebase init hosting # public directory: dist, single-page app: yes
firebase deploy
```

## โครงสร้าง

- `src/quiz.js` การสุ่มและป้องกันคำถามซ้ำ
- `src/db.js` IndexedDB และ fallback ในหน่วยความจำ
- `src/firebase.js` config/cloud bootstrap
- `src/importer.js` CSV validation และ duplicate hash
- `public/sw.js` offline cache และ lifecycle ของ PWA
