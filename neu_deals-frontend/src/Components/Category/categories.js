import chair from './img/chair.jpg';
import studytable from './img/Table3.jpg';
import phone from './img/iphone13.jpg';
import book from './img/HarryPotter.jpg';
import jacket from './img/Jacket1.jpeg';
import coffeetable from './img/Table1.jpg';
import prideprejudice from './img/pp.jpeg';
import winterjacket from './img/wintercoat.jpeg';
import twilight from './img/twilight.jpeg';
import watch from './img/watch.jpeg';
import boots from './img/boots.jpeg';
import macbook from './img/macbook.webp';

const Categories = [
    {
        id:1,
        title: "iPhone 13",
        price: 650,
        image: phone,
        category: "Electronics",
        reset:"RemoveFilter",
        description: "iphone 13 color - Sierra Blue in excellent condition. A must buy"
    },
    {
        id:2,
        title: "Pride and Prejudice",
        price: 20,
        image: prideprejudice,
        category: "Books",
        reset:"RemoveFilter",
        description: "Pride and Prejudice, a novel by Jane Austen. Must read."
    },
    {
        id:3,
        title: "Study Table",
        price: 80,
        image: studytable,
        category: "Furnitures",
        reset:"RemoveFilter",
        description: "A wooden Study Table, with galaxy patteren study table."
    },
    {
        id:4,
        title: "Harry Potter",
        price: 30,
        image: book,
        category: "Books",
        reset:"RemoveFilter",
        description: "Harry Potter and the Philosopher's stone. Must read !"
    },
    {
        id:5,
        title: "Coffee Table",
        price: 80,
        image: coffeetable,
        category: "Furnitures",
        reset:"RemoveFilter",
        description: "Wooden Coffee Table in good condition.Perfect for coffee talks"
    },
    {
        id:6,
        title: "Leather Jacket",
        price: 100,
        image: jacket,
        category: "Apparels",
        reset:"RemoveFilter",
        description: "Leather jacket to keep warm during Fall winds. Brown color."
    },
    {
        id:7,
        title: "Office Chair",
        price: 75,
        image: chair,
        category: "Furnitures",
        reset:"RemoveFilter",
        description:"Moveable office chair, can be used as study chair."
    },
    {
        id:8,
        title: "Winter Jacket",
        price: 90,
        image: winterjacket,
        category: "Apparels",
        reset:"RemoveFilter",
        description:"Winter Jacket in excellent condition to keep warm."
    },
    {
        id:9,
        title: "Twilight Series",
        price: 40,
        image: twilight,
        category: "Books",
        reset:"RemoveFilter",
        description:"Twilight saga,to occupy you during your free time!"
    },
    {
        id:10,
        title: "Apple Watch",
        price: 260,
        image: watch,
        category: "Electronics",
        reset:"RemoveFilter",
        description:"Apple watch in best condition to aid you."
    },
    {
        id:11,
        title: "Winter Boots",
        price: 70,
        image: boots,
        category: "Apparels",
        reset:"RemoveFilter",
        description:"Boots to keep you warm during Boston Winter"
    },
    {
        id:12,
        title: "Macbook Air",
        price: 860,
        image: macbook,
        category: "Electronics",
        reset:"RemoveFilter",
        description:"Macbook Air in best condition, at a best price"
    },

]

export default Categories;