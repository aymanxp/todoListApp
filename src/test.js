import { addTask } from './utils/main.js';


console.log('---- testing addTask function -----');
let addedTask = {};
try {
  const newTask = {
    title: 'taskkk',
    description: 'teeeesting'
  }
  addedTask = await addTask(newTask);
  console.log(addedTask);
  console.log('Success!!');
} catch (error) {
  console.log(`Shit is not working ${error.message}`);
}
console.log('------------------------------')



