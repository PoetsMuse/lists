import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { NumberedList } from "./NumberedList";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { Modal } from "./Modal";

const people = [{
  name: 'John Doe',
  age: 34,
  hairColor: 'brown',
  hobbies: ['swimming', 'cycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'math'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the professionals use',
  rating: 3.8,
}, {
  name: 'Running shoes',
  price: '$120',
  description: 'Ergonomic shoes for running',
  rating: 4.2,
}];

function App() {
  return (
    <>
     <Modal>
          <LargeProductListItem product={products[0]} />
        </Modal>
     <RegularList 
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem} />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem} />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem} /> 
       
    </>
    
  );
}

export default App;
