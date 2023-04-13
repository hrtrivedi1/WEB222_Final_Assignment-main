window.reviewData = [{
    name: "Aaron Gray",
    date: "2023-03-28",
    rating: 4,
    review: "  I've played chess for a long time, and it never gets boring. The game is extremely strategic and intellectually demanding, and it tests my ability to foresee my opponent's actions. I enjoy the sense of satisfaction I get after defeating my opponent and winning the game. Chess is unquestionably a timeless classic, and I urge everyone who values cerebral exercise to give it a try."
},
{
    name: "Janet Phillip",
    date: "2023-03-29",
    rating: 5,
    review: "I just recently began playing chess, and I am now completely addicted. I enjoy the feeling of being able to manoeuvre my opponent and dominate the board since the game is so engrossing and captivating. Chess has taught me so much about strategy and critical thinking, and it has even benefited me in other aspects of my life. Overall, I think everyone should give chess a try at least once. It's a great game."
},
{
    name: "Yong Su",
    date: "2023-03-30",
    rating: 3,
    review: "Chess was first a little intimidating for me because I'm not very good at strategic games. But after some effort and practice, I've learned to appreciate the elegance and complexity of the game. I adore how each component has its own special skills and restrictions and how they combine to make a dynamic, ever-changing game. Even though I'm not the finest chess player in the world, I still like playing and find it to be fulfilling."
},
{
    name: "Kris Trevor",
    date: "2023-03-31",
    rating: 2,
    review: "Chess is a timeless game that has endured through the years for a good reason. It is a game that calls for knowledge, perseverance, and foresight, and winning a tough game may be very fulfilling. The learning curve can be steep, and I do believe that it might be a little daunting for beginners. Nevertheless, chess is a game that offers countless opportunities and challenges for those who are prepared to put in the time and effort."
},
{
    name: "Aum Patel",
    date: "2023-04-01",
    rating: 5,
    review: "I've always admired chess' complexity and depth as a lover of strategy games. The game is a true test of ability and intelligence, and it rewards players for their capacity for original thought and flexibility in the face of change. I have played chess for many hours, both in person and online, and I never get bored. It's a hard and enjoyable game that has given me a lot of enjoyment over the years."
},
{
    name: "Wang Su",
    date: "2022-03-20",
    rating: 4,
    review: "Chess is a game that requires both analytical thinking and creativity, and it provides a wonderful mental exercise for players of all ages. I have been playing chess for years, and I still find it to be one of the most intellectually stimulating games out there. What I love most about chess is that no two games are ever the same, and there are always new strategies and tactics to discover. Overall, I think that chess is a great game for anyone who enjoys a challenge, and I would highly recommend it to anyone looking to improve their strategic thinking skills."
}
];

document.addEventListener('DOMContentLoaded', function() {
createTable(reviewData);

const form = document.querySelector('.review-form-input-area');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const review = document.querySelector('#review').value;

    const newReview = {
        name,
        date,
        rating,
        review
    };

    reviewData.push(newReview);

    form.reset();

    createTable(reviewData);
});

});

function createTable(reviews) {
let table = document.querySelector("#reviews-table");
let newRow, newCell, newText;

reviews.forEach(function(review) {
    newRow = table.insertRow();
    newRow.className = "card";

    newCell = newRow.insertCell();
    newCell.className = "reviews-name";
    newCell.textContent = "Name: ";
    newText = document.createTextNode(review.name);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newCell.className = "reviews-date";
    newCell.textContent = "Date: ";
    newText = document.createTextNode(review.date);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newCell.className = "reviews-rating";
    newCell.textContent = "Rating: ";
    newText = document.createTextNode(getRatingStars(review.rating));
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newCell.className = "reviews-review";
    newText = document.createTextNode(review.review);
    newCell.appendChild(newText);
});
}

function getRatingStars(rating) {
let starsHtml = '';
for (let i = 0; i < rating; i++) {
    starsHtml += '★ ';
}
for (let i = rating; i < 5; i++) {
    starsHtml += '☆ ';
}
return starsHtml.trim();
}