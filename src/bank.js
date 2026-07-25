const curriculum={
 'ป.4':['แรงและการเคลื่อนที่','สิ่งมีชีวิตรอบตัว','ส่วนประกอบของพืช','การจำแนกสัตว์'],
 'ป.5':['ระบบนิเวศในโรงเรียน','ความสัมพันธ์ระหว่างสิ่งมีชีวิต','ห่วงโซ่อาหาร','วัฏจักรน้ำ'],
 'ป.6':['อาหารและสารอาหาร','ระบบย่อยอาหาร'],
 'ม.1':['สารบริสุทธิ์และสารผสม','จุดเดือด','อะตอม','การจำแนกธาตุ'],
 'ม.2':['สารละลาย','อันตรายของบุหรี่ไฟฟ้า','เลือด','หลอดเลือด','หัวใจ','อัตราการเต้นหัวใจ'],
 'ม.3':['การถ่ายทอดลักษณะทางพันธุกรรม']};
export const grades=Object.keys(curriculum);
export function makeBank(){return grades.flatMap((grade,gi)=>Array.from({length:105},(_,i)=>{const topic=curriculum[grade][i%curriculum[grade].length];const level=5+(i%3);const answer=(i*7+gi)%4;return {id:`SH-${gi+4}-${String(i+1).padStart(3,'0')}`,grade,level,topic,question:`ข้อใดอธิบายเรื่อง “${topic}” ได้เหมาะสมที่สุด (ชุดความรู้ ${i+1})`,options:[0,1,2,3].map(n=>n===answer?`คำอธิบายที่ถูกต้องเกี่ยวกับ${topic}`:`ตัวเลือกทดลอง ${n+1} ที่ไม่สอดคล้อง`),correct:answer,enabled:true}}))}
