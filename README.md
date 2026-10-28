# :jack_o_lantern: ITS-JavaScript :sparkles:
&nbsp;&nbsp;&nbsp;&nbsp;Repository นี้ถูกสร้างขึ้นมาเพื่อบันทึกความคืบหน้าในการศึกษาหาความรู้เพื่อใช้ในการเตรียมสอบใบเซอร์วิชา **Information Technology Specialist: JavaScript**

## :clipboard: Lists of Content :relieved:
เนื้อหาในเอกสารนี้จะมีการบรรยายทั้งหมด 7 หัวข้อ ได้แก่
| หัวข้อ        | คำอธิบาย |
| ----------- | ----------- |
| :hammer: [เครื่องมือ](#hammer-เครื่องมือ-carpentry_saw)| เครื่องมือที่ผู้เขียนใช้ระหว่างการเรียน |
| :information_source: [แหล่งข้อมูล](#information_source-แหล่งข้อมูล-butter) | แหล่งอ้างอิงหลักสำหรับการศึกษาเนื้อหาใน ITS - JavaScript |
| :notebook_with_decorative_cover: [สมุด](#notebook_with_decorative_cover-สมุด-pencil2) |เนื้อหาทั้งหมดตั้งแต่ต้น จนถึงเนื้อหาล่าสุดที่ผู้เขียนได้จดอธิบายหลักการต่างๆ ที่พบระหว่างการศึกษาเนื้อหา|
|:question: [แบบทดสอบท้ายบทเรียน](#question-แบบทดสอบท้ายบทเรียน-alien)| โจทย์สำหรับการทดสอบความเข้าใจของแต่ละหัวข้อย่อย|
|:construction: [แบบทดสอบท้าย Objective domain](#construction-แบบทดสอบท้าย-objective-domain-ferris_wheel) |โจทย์สำหรับการทดสอบความเข้าใจต่อภาพรวมของ Domain ใหญ่ <font color="Red">(ซึ่งจะถูกออกแบบมาให้เป็นโจทย์สำหรับการทำ Mini - Project เนื่องจากต้องการทดสอบความเข้าใจต่อหัวข้อย่อยทั้งหมดที่อยู่ใน Domain นั้นๆ)</font>|
|:bulb: [รวมเฉลยแบบทดสอบท้ายบทเรียน](#bulb-รวมเฉลยแบบทดสอบท้ายบทเรียน-vertical_traffic_light)|แนวทางคำตอบสำหรับโจทย์ที่ใช้ตรวจสอบความเข้าใจของแต่ละหัวข้อย่อย|
|:zap: [รวมเฉลยแบบทดสอบท้าย Objective domain](#zap-รวมเฉลยแบบทดสอบท้าย-objective-domain-rainbow)|แนวทางคำตอบสำหรับโจทย์ที่ใช้ตรวจสอบความเข้าใจของ Mini - Project|

## :hammer: เครื่องมือ :carpentry_saw:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;เครื่องมือที่ใช้ในการศึกษาเนื้อหา JavaScript นั้นมีการใช้เครื่องมือทั้งสิ้น 1 เครื่องมือ! นั่นคือ
* [Visual Studio Code](https://code.visualstudio.com/download)<br>
    <br>
    >&nbsp;&nbsp;&nbsp;&nbsp;ถ้าหากผู้อ่านยังไม่มีเครื่องมือตัวนี้ ผู้อ่านสามารถคลิกที่ชื่อ [Visual Studio Code](https://code.visualstudio.com/download) ต่อจากนั้นให้ผู้อ่านติดตั้ง [git-bash](https://git-scm.com/install/windows) เพื่อใช้งาน git control โดยคลิปสอนการติดตั้งสามารถกดเข้าที่ลิงก์ด้านล่างนี้<br>
    >  * :arrow_forward: [How Install Visual Studio Code on Windows 11 (VS Code)](https://youtu.be/cu_ykIfBprI?si=2hWSMzPqeBDgdndn) 
    > * :arrow_forward: [How to install Git on Windows 11 (Updated 2025)](https://youtu.be/t2-l3WvWvqg?si=0eGpRFnpHI3LNDFV)
    > <br><br>ต่อจากนั้นมี 4 ขั้นตอนสำหรับการตั้งค่า เพื่อให้สามารถรัน JavaScript บนเครื่องของผู้อ่านได้ ได้แก่
    > 1. เปิด Git Bash application จากนั้นทำการตั้งค่าชื่อ และอีเมล เพื่อเข้าใช้งาน Git โดยคำสั่งในการ Config username & email มีดังนี้
    >       - พิมพ์คำสั่งนี้ เปลี่ยนชื่อ username ให้ตรงกับบัญชี github ของตนเอง `$ git config --global user.name "John Doe"` ต่อจากนั้นกดปุ่ม Enter
    >       - พิมพ์คำสั่งนี้ เปลี่ยนบัญชี email ให้ตรงกับบัญชี github ของตนเอง `$ git config --global user.email johndoe@example.com` ต่อจากนั้นกดปุ่ม Enter
    > 1. เลือกโฟลเดอร์บนเครื่องคอมพิวเตอร์ที่ต้องการจะดาวน์โหลด Repository ต่อจากนั้นให้กดคลิกขวาที่ touchpad / mouse ณ บริเวณพื้นที่ว่าง กด Show more options และเลือก Open Git Bash here ใส่คำสั่ง `git clone "https://github.com/Bi-Ma-GOoOD/ITS-JavaScript.git"` ตามด้วยกดปุ่ม Enter เพื่อทำการดาวน์โหลด Repository ลงบนเครื่อง
    > 1. เปิดโปรแกรม Visual Studio Code และเลือกเปิดโฟลเดอร์ Repository ที่ได้ทำการติดตั้งในขั้นตอนที่ 2 ต่อจากนั้นให้ทำการติดตั้ง Extension (หรือกดคีย์ลัด `Ctrl+Shift+X` สำหรับ Windows) และในช่องค้นหาให้พิมพ์คำว่า **Live Server** จากนั้นกดปุ่ม Install
    > 1. เมื่อติดตั้ง Extension สำเร็จแล้วให้ผู้อ่านปิดโปรแกรม Visual Stdio Code และเปิดใหม่อีกครั้ง จากนั้นให้คลิกขวาของไฟล์ที่ชื่อว่า [index.html](/index.html) จากนั้นให้เลือกตัวเลือกที่ชื่อว่า **Open with Live Server** ต่อจากนั้นเมื่อสังเกตด้านขวาล่างของหน้าจอจะพบข้อความ Server is Started at port: port_number และ Visual Studio Code จะเปิดหน้าต่างบราวเซอร์มาให้ <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;เมื่อจบ 4 ขั้นตอนข้างต้นแล้ว ตอนนี้ผู้อ่านสามารถกดคีย์ลัด `Ctrl+Shift+I` ในบราวเซอร์สำหรับเปิด JavaScript Console เพื่อรันคำสั่งต่างๆ ทดสอบคำสั่งเริ่มต้น `console.log("Hello, World!");`

## :information_source: แหล่งข้อมูล :butter:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;แหล่งข้อมูลหลักที่ใช้ในการศึกษาภาษา JavaScript ส่วนมากจะมาจาก 1 ช่องทางหลัก ได้แก่
1. [เอกสารทางการของภาษา JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)<br>
    <br>
    > :thinking: **กรณีศึกษาเพิ่มเติม** <br>
    เนื่องจากว่าในบางทีเนื้อหาจากเอกสารทางการนั้น อาจจะมีการอธิบายที่ละเอียด หรือมีการใช้คำที่ตรงตามหลักการ แต่ว่า ตัวเราซึ่งเป็นผู้อ่าน อาจจะเกิดความสับสนและไม่เข้าใจสำหรับการใช้คำหรือหลักการต่างๆ เหล่านั้น ดังนั้นแล้วผู้เขียนแนะนำให้ผู้อ่านศึกษาหาความรู้เพิ่มเติมจาก เว็บไซต์ คลิปต่างๆ จากยูทูป หรือ AI Chatbot เพื่อให้เกิดความกระจ่างต่อข้อมูลที่เอกสารทางการต้องการจะสื่อ

## :notebook_with_decorative_cover: สมุด :pencil2:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;สมุดเป็นหนึ่งในวิธีที่ผู้เขียนใช้ในการจดข้อมูลต่างๆ ระหว่างการเรียนรู้จากเอกสารทางการอย่าง [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) เช่นหลักการที่ภาษา javaScript ใช้หรือแนวคิดในการออกแบบการทำงาน โดยสิ่งที่สมุดเล่มนี้พยายามจะเน้นคือการสร้าง และ เพิ่มความเข้าใจเพิ่มเติมจากสิ่งที่เอกสารทางการต้องการจะนำเสนอ หรือก็คือการแปลงข้อมูลในเชิงวิชาการ ให้กลายเป็นข้อมูลที่สามารถอ่านแล้วเข้าใจได้ง่ายขึ้น โดยผู้อ่านสามารถเข้าถึงเนื้อหาในสมุด และสามารถแก้ไข หรือต่อยอดเพิ่มเติมได้จากลิงก์ด้านล่างนี้
* [ITS - JavaScript notebook](https://itittraining.sharepoint.com/:b:/s/InStructorBK/IQBCipd36cdoTbTuJCkYtkyEAW2OJmaiXS5s-eKtFYtEstc?e=uBWln5)

## :question: แบบทดสอบท้ายบทเรียน :alien:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;ในการศึกษาเนื้อหาจาก [ITS Specialist Objective Exam - JavaScript](https://certiport.filecamp.com/s/i/ITS_Javascript) จะมีการแบ่งหัวข้อใหญ่ทั้งหมด 5 หัวข้อใหญ่ หรือ 5 domains ซึ่งในแต่ละ domain จะมีหัวข้อย่อยอยู่ในนั้น ยกตัวอย่างเช่น domain ที่ 1 มีหัวข้อย่อยทั้งหมด 5 หัวข้อย่อย (1.1 - 1.5) ซึ่งระหว่างที่ผู้เขียนได้สำเร็จจากการเรียนในแต่ละหัวข้อย่อย ผู้เขียนจะทำการให้ [Claude](https://claude.ai/share/3f0d5af4-9387-4acc-96aa-57c1990baa5f) (สามารถคลิกที่ลิงก์นี้ในการเข้าถึงข้อความแชทที่ผู้เขียนสอบถามโจทย์ และหลักการต่างๆ) ช่วยสร้างโจทย์ขึ้นมาเพื่อเสริมสร้างความเข้าใจต่อหัวข้อย่อยนั้นๆ ได้ดีมากยิ่งขึ้น โดยโจทย์ที่อยู่ในเอกสารนี้จะครอบคลุมตั้งแต่หัวข้อย่อยที่ 1.1 จนถึง 2.3<br>
&nbsp;&nbsp;&nbsp;&nbsp;โดยผู้อ่านสามารถเข้าถึงแบบทดสอบท้ายบทเรียนได้จากลิงก์ต่อไปนี้ [แบบทดสอบท้ายบทเรียน](/question/lessons.md)<br>
&nbsp;&nbsp;&nbsp;&nbsp;**หมายเหตุ:** แบบทดสอบท้ายบทเรียนที่สามารถเข้าถึงได้จากลิงก์ก่อนหน้านั้น จะมีเพียงโจทย์เท่านั้น หากผู้อ่านต้องการจะเข้าถึงเฉลยคำตอบของแต่ละคำถามนั้น ผู้อ่านสามารถเข้าถึงได้จากลิงก์ต่อไปนี้ [เฉลยแบบทดสอบท้ายบทเรียน](#bulb-รวมเฉลยแบบทดสอบท้ายบทเรียน-vertical_traffic_light)

## :construction: แบบทดสอบท้าย Objective domain :ferris_wheel:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;แบบทดสอบท้าย Objective domain ถูกสร้างขึ้นมาเพื่อเป็นการเตือนความจำ และการเพิ่มความเข้าใจต่อเนื้อหาของ Objective สำหรับ domain นั้นๆ ได้อย่างมีประสิทธิภาพมากยิ่งขึ้น เนื่องจากว่าในแต่ละ domain จะมีหัวข้อย่อยหลายหัวข้อย่อย ดังนั้นแล้วเมื่อเวลาผ่านไปเนื้อหาที่ได้ศึกษาไปกับหัวข้อย่อยแรกๆ ก็อาจจะเกิดความหลงลืม หรือเกิดความสับสนได้<br>
&nbsp;&nbsp;&nbsp;&nbsp;ดังนั้นแล้วเพื่อแก้ไขปัญหานี้ผู้เขียนจึงได้ทำการสร้างแบบทดสอบท้าย Objective domain นั้นๆ ขึ้นมา เพื่อเป็นการประสานความรู้ที่เรียนมาจากหัวข้อย่อยล่าสุดกับหัวข้อย่อยแรกๆ ของ domain นั้นๆ ให้มีการนำมาใช้งานร่วมกันในการแก้ไขปัญหา หรือ โจทย์ที่อยู่ในลักษณะของการทำ Mini - Project โดยโจทย์ของ Mini - Project จะถูกสร้างและกำหนดข้อกำหนดมาจาก [Claude](https://claude.ai/share/3f0d5af4-9387-4acc-96aa-57c1990baa5f) <br>
&nbsp;&nbsp;&nbsp;&nbsp;โดยผู้อ่านสามารถเข้าถึงแบบทดสอบท้าย Objective domain ได้จากลิงก์ต่อไปนี้ [แบบทดสอบท้าย Objective domain](/question/domains.md)<br>
&nbsp;&nbsp;&nbsp;&nbsp;**หมายเหตุ:** แบบทดสอบท้าย Objective domain ที่สามารถเข้าถึงได้จากลิงก์ก่อนหน้านั้น จะมีเพียงโจทย์ และข้อกำหนดความต้องการที่จะส่งผลต่อการเขียนระบบเพียงเท่านั้น หากผู้อ่านต้องการจะเข้าถึงเฉลยที่เป็นคำตอบสำหรับการเขียนโค้ดเพื่อสร้างโปรแกรมตามข้อกำหนดที่มีการระบุเอาไว้ในการทำ Mini - Project ผู้อ่านสามารถเข้าถึงได้จากลิงก์ต่อไปนี้ [เฉลยแบบทดสอบท้าย Objective domain](#zap-รวมเฉลยแบบทดสอบท้าย-objective-domain-rainbow)
## :bulb: รวมเฉลยแบบทดสอบท้ายบทเรียน :vertical_traffic_light:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
> **คำเตือน**<br>
&nbsp;&nbsp;&nbsp;&nbsp;ก่อนที่ผู้อ่านจะเริ่มเข้าถึงเอกสารรวมเฉลยแบบทดสอบท้ายบทเรียนนั้น ผู้เขียนแนะนำให้ผู้อ่านได้ทำการลองฝึกปฎิบัติ [แบบทดสอบท้ายบทเรียน](/question/lessons.md) ก่อน และเมื่อผู้อ่านต้องการจะตรวจสอบคำตอบของตนเอง หรือ ต้องการที่จะได้แนวคิดเริ่มต้น ผู้อ่านก็สามารถทำได้ โดยผู้อ่านสามารถเข้าถึงลิงก์นี้ [รวมเฉลยแบบทดสอบท้ายบทเรียน](/answer/lessons.md)

## :zap: รวมเฉลยแบบทดสอบท้าย Objective domain :rainbow:
:ping_pong: [กลับไปที่สารบัญ](#clipboard-lists-of-content-relieved)<br><br>
> **คำเตือน**<br>
&nbsp;&nbsp;&nbsp;&nbsp;ก่อนที่ผู้อ่านจะเริ่มเข้าถึงเอกสารรวมเฉลยแบบทดสอบท้าย Objective domain นั้น ผู้เขียนแนะนำให้ผู้อ่านได้ทำการลองฝึกปฎิบัติ [แบบทดสอบท้าย Objective domain](/question/domains.md) ก่อน และเมื่อผู้อ่านต้องการจะตรวจสอบคำตอบของตนเอง หรือ ต้องการที่จะได้แนวคิดเริ่มต้น ผู้อ่านก็สามารถทำได้ โดยผู้อ่านสามารถเข้าถึงลิงก์นี้ [รวมเฉลยแบบทดสอบท้าย Objective domain](/answer/domains.md)