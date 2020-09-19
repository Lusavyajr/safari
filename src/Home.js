import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="img">
      <img src={require('./safari-zoo.jpg')} alt="mbuga" />


      <h2>Welcome to safari</h2> 
        <p>
        A safari is a journey. This is the meaning of the word in Swahili, the language of East Africa.
        Your journey into Africa starts with Tanzania-Experience. When you join us on safari you will be met at the airport,
        aken to a hotel or a central meeting point and briefed before you set off. You will be transported in 
        a well-maintained, clean Toyota 4×4 safari vehicle, driven by a professional local guide in areas that will leave 
        you breathless with wonder and excitement. You will search for the ‘Big Five’ – buffalo, elephant, leopard, 
        lion and rhino – and will be amazed by the sheer beauty of grass-covered savannas, extinct volcanoes and rare birds.
        You will see animals, landscapes and flowers and you will meet the local people and taste local food.
        </p>

      <h3>Adventure Camping Safari</h3>
        <p>
        On our adventure camping safaris you will be immersed in the East African wilderness. 
        You will travel on rough adventurous roads, pass tiny rural settlements and see fascinating landscapes 
        and abundant wildlife. All your senses will be involved; from smelling early morning coffee, 
        experiencing the thrill of a kill to the chill of a morning game drive. Falling asleep to the hooting of an owl or 
        waking up with the roaring of a lion is what you will experience. The safari experience is all the more intense 
        as you are ‘right in the middle’ of it all. The nearness to the nature, especially at night with its nocturnal 
        sounds, compensates for the luxury of a lodge. Our camping safaris in Tanzania offer all of this and are therefore 
        perfect for nature lovers and those who are looking for a break from civilisation and its comforts. 
        Camping is to experience East Africa’s nature, animals and cultures in an affordable way.
        </p>

        <div className="footer">safari@tz.com</div>
    </div>
    
  );
}

export default Home;
