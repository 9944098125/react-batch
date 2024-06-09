const books = [
	{
		title: "The Silent Patient",
		author: "Alex Michael",
		price: "Rs. 150/-",
		image: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg",
	},
	{
		title: "All Time Favorites",
		author: "Ruskin Bond",
		price: "Rs. 170/-",
		image: "https://m.media-amazon.com/images/I/51fnKED0JJL.AC_SX250.jpg",
	},
	{
		title: "Harry Potter",
		author: "J K Rowling",
		price: "Rs. 220/-",
		image: "https://m.media-amazon.com/images/I/51BTfQsu58L.AC_SX250.jpg",
	},
	{
		title: "Elon Musk",
		author: "Walter Isaacson",
		price: "Rs. 150/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41YMXMqcqtL._AC_SX184_.jpg",
	},
	{
		title: "Hindus In Hindu Rashtra",
		author: "Anand Ranganatham",
		price: "Rs. 150/-",
		image: "https://m.media-amazon.com/images/I/51TdFGla--L.AC_SX250.jpg",
	},
	{
		title: "The Gruffalo",
		author: "Julia Donaldson",
		price: "Rs. 250/-",
		image: "https://m.media-amazon.com/images/I/51qJCaDWtKL.AC_SX250.jpg",
	},
	{
		title: "Nothing But the truth",
		author: "Rishab shah",
		price: "Rs. 180/-",
		image: "https://m.media-amazon.com/images/I/5158etzi0dL.AC_SX250.jpg",
	},
	{
		title: "Traitors Gate",
		author: "Jeffrey Archer",
		price: "Rs. 450/-",
		image: "https://m.media-amazon.com/images/I/51LTsgz6BQL.AC_SX250.jpg",
	},
	{
		title: "Percy Jackson",
		author: "Rick Riordan",
		price: "Rs. 430/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NsJhoYCqL._AC_SX184_.jpg",
	},
	{
		title: "The Running Grave",
		author: "Robert Galbrath",
		price: "Rs. 350/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51ROoKC0-HL._AC_SX184_.jpg",
	},
	{
		title: "Modi: The challenge of 2024",
		author: "Minhaz merchant",
		price: "Rs. 455/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/410LjJgnZmL._AC_SX184_.jpg",
	},
	{
		title: "The Power of your mind",
		author: "Advent Pillar",
		price: "Rs. 330/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41+CqNWoutS._SX342_SY445_.jpg",
	},
	{
		title: "You Can",
		author: "Paper back",
		price: "Rs. 110/-",
		image: "https://m.media-amazon.com/images/I/514fD3oqIFL._SX342_SY445_.jpg",
	},
	{
		title: "The Hidden Hindu",
		author: "Akshat Gupta",
		price: "Rs. 340/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51Na+IacyeL._AC_SX184_.jpg",
	},
	{
		title: "Diary of a Whimpy kid",
		author: "Jennifer Kol",
		price: "Rs. 250/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51MqocDcH3L._AC_SX184_.jpg",
	},
	{
		title: "The Diary of a CEO",
		author: "Steven Barlett",
		price: "Rs. 450/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41hpet8rmqL._AC_SX184_.jpg",
	},
	{
		title: "Culture",
		author: "Deepinder Goyal",
		price: "Rs. 230/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41Xkfc-Oc6L._AC_SX184_.jpg",
	},
	{
		title: "You must know your constitution",
		author: "Fali R Nerman",
		price: "Rs. 340/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NhsG7qBkL._AC_SX184_.jpg",
	},
	{
		title: "Murder in the family",
		author: "Cara Hunter",
		price: "Rs. 233/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51zn8scX3gL._AC_SX184_.jpg",
	},
	{
		title: "World's worst best Girlfrient",
		author: "Gurjos Datta",
		price: "Rs. 250/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51HAb4KeAdL._AC_SX184_.jpg",
	},
	{
		title: "Ashoka",
		author: "Patrick olivelle",
		price: "Rs. 350/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51OEnlv1DwL._AC_SX184_.jpg",
	},
];

console.log(books);

function displayBooks(list) {
	const listContainer = document.getElementById("booksList");
	listContainer.innerHTML = "";

	list.forEach((book) => {
		const bookContainer = document.createElement("li");
		const title = document.createElement("h5");
		const author = document.createElement("p");
		const price = document.createElement("p");
		const image = document.createElement("img");
		// style all the elements
		bookContainer.style.padding = "15px";
		bookContainer.style.boxShadow = "1px 1px 1px -1px white";
		bookContainer.style.borderRadius = "8px";
		bookContainer.style.color = "white";
		bookContainer.style.height = "250px";
		bookContainer.style.width = "250px";
		bookContainer.style.display = "flex";
		bookContainer.style.flexDirection = "column";
		bookContainer.style.alignItems = "center";
		bookContainer.style.margin = "15px";

		title.style.fontWeight = "700";
		title.style.fontSize = "20px";
		title.style.textAlign = "center";
		author.style.fontWeight = "600";
		author.style.fontSize = "15px";
		price.style.fontWeight = "500";
		price.style.fontSize = "18px";
		image.style.height = "100px";
		image.style.width = "100px";
		image.style.borderRadius = "50%";
		// defining the content in elements
		title.textContent = book.title;
		author.textContent = book.author;
		price.textContent = book.price;
		image.src = book.image;
		// appending the child elements to parent
		bookContainer.appendChild(image);
		bookContainer.appendChild(title);
		bookContainer.appendChild(author);
		bookContainer.appendChild(price);
		// will add the book container to list container which is from HTML
		listContainer.appendChild(bookContainer);
	});
}

function searchBooks() {
	const searchTerm = document.getElementById("search").value;
	const searchedItems = books.filter((eachBook) => {
		return (
			eachBook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			eachBook.author.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});
	if (searchTerm !== "") {
		displayBooks(searchedItems);
		console.log(searchedItems);
	} else {
		displayBooks(books);
	}
}

displayBooks(books);
