import React from 'react';
import './App.css';

function NationalPark() {
  return (
    <div className="img">
      <img src={require('./man u.jpg')} alt="mbuga" />


<h1>Welcome to the National Parks</h1> 
  
  <h2>Welcome to Lake Manyara National Park</h2>
    <p>
      On the floor of the Great Rift Valley,lies Lake Manyara National Park.
      The rift valley escarpment wall give the Park a spectacular view.
      Famous for its tree-climbing lions, the Park, with its underground water forest support many lives especially the primates.
      Hot water springs is one of the rare geological feature that give visitors to this area an opportunity to explore. 
      The springs are 70 degrees warm enough to boil an egg!
      For birdwatchers ,the Park is a paradise with more than 350 species of birds identified.
      More than two million flamingoes have been countedin the lake at the same time.!
      An opportunity to walk on canopy is also available giving a bird-eye view of the ground water forest!</p>

      <h2>Welcome to Serengeti National Park</h2>
        <p>
        Maasai people called this park 'Siringet', meaning endless plains. 
        The Serengeti speaks for itself and with good reason not only the migration of over 1 million wildebeest 
        through its plains and woodlands but also unique landscapes and other spectacular wildlife.
        The Serengeti is home to the world’s largest populations of Wildebeest, Zebra, Cape Eland, Lion, Cheetah, 
        Hyena and Gazelles. The scenic beauty of the sky with cool nights and warm days makes your visit to this 
        remaining home for great migration of large mammals incredible! 
        </p>
    <h2>Welcome to Tarangire National Park</h2>
      <p>
        arangire, with many African Elephants per square kilometers than any other national park in the country,
        lies about 120Km southwest of Arusha City.
        The Park got its name from Tarangire River that flows through the centre of the Park and form the dry season refuge
        for wildlife especially elephants!
        It is in this Park that visitors will be able to see threatened as well as endangered species ofsuch as ebony trees, 
        Python, cheetah, elephants, African wild dogs, lesser and greater Kudu, Beisa Oryx, Gerenuk and others
        Birdlife in Tarangire is just Amazing ! About 550 species of birds have been recorded in the park, which is larger number of bird species than the famous Serengeti.
      </p>

  <div className="footer">safari@tz.com</div>
</div>

);
}

export default NationalPark;
