//import '../style.css';
import '../scss/main.scss';
import '../index.html';

let person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({ name: 'Adeel', designation: 'padawan' });
