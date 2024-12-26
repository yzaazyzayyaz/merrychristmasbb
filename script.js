const memories =[{
  memory: 'i love how kind and understanding u always are even during my bad moods :"(('
}, {
  memory: 'everytime we go out, the day somehow always ends with u giving me something - whether something cute (like the hairclips) or something useful (the green thing u gave me that smells good) - i appreciate them all so so much :<'
}, {
  memory: 'being around u instantly jst boosts my mood and puts me at ease. i love how safe, comfortable, and happy things are around u :>'
}, {
  memory: 'u have the prettiest laugh. i love hearing u laugh so so much'
}, {
  memory: 'i love how warm and comforting ur hugs are. cuddling with u always gives me so muchh peace ♡'
}, {
  memory: 'i always admire how dedicated u are to achieving ur goals no matter how much time and effort they take. ur efforts r always seen and appreciated by me ♡'
}, {
  memory: 'i love how u always take the time to do little things like make sure im eating well even when you are really busy'
}, {
  memory: 'BABY UR SO CUTE WHEN U WEAR A CAP IDK EVEN WHY SHJSHJS I MEAN URE ALWAYS CUTE BUT BASTAAA WHEN U WEAR A CAP >>>>>> '
}, {
  memory: 'i love how u take the time to visit me sa tc even though it is super far :<'
}, {
  memory: 'i love how u always try ur best to be there for the people u care about ♡'
}, {
  memory: 'core memory for me: idt u even realize it but u were so cute sa doppio - i know we rmbr doppio for other reasons HAHA but also i rmbr u pushing back my hair so it wouldnt touch the sauce; u helping the ate carry the food trays and bringing them back down so they wouldnt have to go up na. the little things u do are the best ><'
}, {
  memory: 'core memory: love love cuddling at the backseat sa taxi with u HSHSHS i hate the traffic but everytime we r tgt i always wish we wouldnt arrive so quickly'
}, {
  memory: 'i love how u nvr make me feel bad whenever i overthink or get anxious about things. and somehow u always know the right things to say and do to make me feel better ♡'
}, {
  memory: 'i love how supportive u are of the things u do while also reminding me to take breaks and take care of myself. u give me space to chase after my dreams and i hope u know i support every goal and dream u have too ♡'
}, {
  memory: 'baby u smell so good idek how what or why like U JUST DO'
}, {
  memory: 'I LOVE ALL YOUR GIFTS so so much :(((( plus u know me so well, ur jewelry choices r so >>> HSHSHDDHDH I LOVE U'
}, {
  memory: 'i enjoy those shared little moments so much like whenever we eat out and talk about anything and everything. i know its not a big thing but just getting to eat with u and spending time together always gives me so much peace. except when u tickle me tho thats not peaceful but its ok i can exact (exact???!) revenge against u bro'
}, {
  memory: 'core memory: our first kiss HSHHSHHJDHJSHGHS u alr know this but i was so unbelievably happy that day. heres to a lifetime of shared kisses with u ♡'
}, {
  memory: 'i love studying with u HSHHSHSHD i love the idea of us jst working hard and chasing our goals and cheering each other on. (with some cuddling and kisses on the side hehe >:))'
}, {
  memory: 'i love doing math with u i miss it sm HSHHSHS i know part of me used cesafi prac as an excuse to spend time with u but i genuinely enjoy math with u HEHE'
}, {
  memory: 'u are the best person that God gave me this 2024. im grateful for everything that u are. there is no one else i want to love the way i love u. ♡'
}, {
  memory: 'bb your hair is so PRETTY like it is kinda brown but also kinda black and IT IS SO PRETTY U R SO CUTE.'
}, {
  memory: 'i love all ur cute messages (and ur selfies HEHE) super sm they rlly do brighten up my day !!!!'
}, {
  memory: 'i love u my qt little nigersaurus'
}]

let btn = document.querySelector("#Qbtn");
let memory = document.querySelector(".memory");

btn.addEventListener("click", function(){
  let random = Math.floor(Math.random() * memories.length);
  memory.innerHTML = memories[random].memory;
})