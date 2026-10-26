# :jack_o_lantern: ITS-JavaScript :sparkles:
&nbsp;&nbsp;&nbsp;&nbsp;Repository นี้ถูกสร้างขึ้นมาเพื่อบันทึกความคืบหน้าในการศึกษาหาความรู้เพื่อใช้ในการเตรียมสอบใบเซอร์วิชา **<font color="#FFA500">Information Technology Specialist: JavaScript</font>** 
## :clipboard: Lists of Content :relieved:
เนื้อหาในเอกสารจะมีการบรรยายทั้งหมด 7 หัวข้อ ได้แก่
| หัวข้อ        | คำอธิบาย |
| ----------- | ----------- |
| :hammer: [เครื่องมือ](#hammer-เครื่องมือ-carpentry_saw)| เครื่องมือที่ผู้เขียนใช้ระหว่างการเรียน |
| :information_source: [แหล่งข้อมูล](#information_source-แหล่งข้อมูล-butter) | แหล่งอ้างอิงหลักสำหรับการศึกษาเนื้อหาใน ITS - JavaScript |
| :notebook_with_decorative_cover: สมุด |เนื้อหาทั้งหมดตั้งแต่ต้น จนถึงเนื้อหาล่าสุดที่ผู้เขียนได้จดอธิบายหลักการต่างๆ ที่พบระหว่างการศึกษาเนื้อหา|
|:question: แบบทดสอบท้ายบทเรียน| โจทย์สำหรับการทดสอบความเข้าใจของแต่ละหัวข้อย่อย|
|:construction: แบบทดทอบสำหรับ Mini - Project|โจทย์สำหรับการทดสอบความเข้าใจต่อภาพรวมของ Domain ใหญ่ <font color="Red">(ซึ่งจะถูกออกแบบมาให้เป็นโจทย์สำหรับการทำ Mini - Project เนื่องจากต้องการทดสอบความเข้าใจต่อหัวข้อย่อยทั้งหมดที่อยู่ใน Domain นั้นๆ)</font>|
|:bulb: เฉลยแบบทดสอบท้ายบทเรียน|แนวทางคำตอบสำหรับโจทย์ที่ใช้ตรวจสอบความเข้าใจของแต่ละหัวข้อย่อย|
|:zap: เฉลยแบบทดสอบสำหรับ Mini - Project|แนวทางคำตอบสำหรับโจทย์ที่ใช้ตรวจสอบความเข้าใจของ Mini - Project|
## :hammer: เครื่องมือ :carpentry_saw:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br>
&nbsp;&nbsp;&nbsp;&nbsp;เครื่องมือที่ใช้ในการศึกษาเนื้อหา JavaScript นั้นมีการใช้เครื่องมือทั้งสิ้น 1 เครื่องมือ! นั่นคือ
* [Visual Studio Code](https://code.visualstudio.com/download)
    >&nbsp;&nbsp;&nbsp;&nbsp;ถ้าหากผู้อ่านยังไม่มีเครื่องมือตัวนี้ ผู้อ่านสามารถคลิกที่ชื่อ [Visual Studio Code](https://code.visualstudio.com/download) ต่อจากนั้นมี 2 ขั้นตอนสำหรับการตั้งค่า เพื่อให้สามารถรัน JavaScript บนเครื่องของผู้อ่านได้ ได้แก่ 
    > 1. ติดตั้ง Extension (หรือกดคีย์ลัด `Ctrl+Shift+X` สำหรับ Windows) และในช่องค้นหาให้พิมพ์คำว่า **Live Server** จากนั้นกดปุ่ม Install
    > 2. เมื่อติดตั้ง Extension สำเร็จแล้วให้ผู้อ่านคลิกขวาของไฟล์ที่ชื่อว่า [index.html](/index.html) จากนั้นให้เลือกตัวเลือกที่ชื่อว่า **Open with Live Server** ต่อจากนั้นเมื่อสังเกตด้านขวาของหน้าจอจะพบข้อความ Server is Started at port: port_number และ Visual Studio Code จะเปิดหน้าต่างบราวเซอร์มาให้ <br>
    &nbsp;&nbsp;&nbsp;&nbsp;เมื่อจบ 2 ขั้นตอนข้างต้นแล้ว ตอนนี้ผู้อ่านสามารถกดคีย์ลัด `Ctrl+Shift+I` สำหรับเปิด JavaScript Console เพื่อรันคำสั่งต่างๆ<br>
    &nbsp;&nbsp;&nbsp;&nbsp;ทดสอบคำสั่งเริ่มต้น `console.log("Hello, World!");`
## :information_source: แหล่งข้อมูล :butter:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br>
&nbsp;&nbsp;&nbsp;&nbsp;แหล่งข้อมูลหลักที่ใช้ในการศึกษาภาษา JavaScript ส่วนมากจะมาจาก 1 ช่องทางหลัก ได้แก่
1. [เอกสารทางการของภาษา JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    > :thinking: **<font color="#FFF2A7">กรณีศึกษาเพิ่มเติม</font>** <br>
    เนื่องจากว่าในบางทีเนื้อหาจากเอกสารทางการนั้น อาจจะมีการอธิบายที่ละเอียด หรือมีการใช้คำที่ถูกต้องตามหลักการ แต่ว่า ตัวเราซึ่งเป็นผู้อ่าน อาจจะเกิดความสับสนและไม่เข้าใจ ผู้เขียนแนะนำให้ผู้อ่านศึกษาหาความรู้เพิ่มเติมจาก เว็บไซต์ หรือ คลิปต่างๆ จากยูทูป เพื่อให้เกิดความกระจ่างต่อข้อมูลที่เอกสารทางการต้องการจะสื่อ