import {addAvailibilty} from './availability'

@addAvailibilty(true)
class Course{}

console.log(new Course());