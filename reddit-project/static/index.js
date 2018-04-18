let request = new XMLHttpRequest();
let postRequest = new XMLHttpRequest();
let deleteRequest = new XMLHttpRequest();

let posts = document.querySelector('.posts');

request.open('GET', '/posts', true);
request.onload = function () {
	let dataBase = (JSON.parse(request.response));

	dataBase.forEach(e => {
		let post = document.createElement('div');
		post.className = 'post';

		let postId = document.createElement('p');
		postId.className = 'postid';
		postId.innerText = e.post_id;

		let votes = document.createElement('div');
		votes.className = 'votes';

		let upArrow = document.createElement('div');
		upArrow.className = 'uparrow';

		let likes = document.createElement('p');
		likes.innerText = e.likes;

		let downArrow = document.createElement('div');
		downArrow.className = 'downarrow';

		votes.appendChild(upArrow);
		votes.appendChild(likes);
		votes.appendChild(downArrow);

		let doge = document.createElement('img');
		doge.className = 'postimage';
		doge.src = '/static/images/doge.png';

		let postInnards = document.createElement('div');
		postInnards.className = 'postinnards';

		let title = document.createElement('a');
		title.setAttribute('href', e.url) ;
		title.className = 'posttitle';
		title.innerText = e.post_title;

		let littleDetails = document.createElement('div');
		littleDetails.className = 'littledetails';

		let littleLogo = document.createElement('img');
		littleLogo.className = 'littlelogo';
		littleLogo.src = '/static/images/littlelogo.png';

		let cantEven = document.createElement('div');
		cantEven.className = 'canteven';

		let postDetails = document.createElement('p');
		postDetails.className = 'postdetails';
		postDetails.innerText = `posted on ${e.date_of_post} by ${e.post_author}`;

		let littleLinks = document.createElement('p');
		littleLinks.className = 'littlelinks';

		let comment = document.createElement('a');
		comment.innerText = 'comment';
		let share = document.createElement('a');
		share.innerText = 'share';
		let save = document.createElement('a');
		save.innerText = 'save';
		let hide = document.createElement('a');
		hide.innerText = 'hide';
		let repost = document.createElement('a');
		repost.innerText = 'repost';

		littleLinks.appendChild(comment);
		littleLinks.appendChild(share);
		littleLinks.appendChild(save);
		littleLinks.appendChild(hide);
		littleLinks.appendChild(repost);

		cantEven.appendChild(postDetails);
		cantEven.appendChild(littleLinks);

		littleDetails.appendChild(littleLogo);
		littleDetails.appendChild(cantEven);

		postInnards.appendChild(title);
		postInnards.appendChild(littleDetails);

		post.appendChild(postId);
		post.appendChild(votes);
		post.appendChild(doge);
		post.appendChild(postInnards);

		posts.appendChild(post);

		upArrow.addEventListener('click', () => {
			request.open('PUT', `/posts/${e.post_id}/upvote`, true);
			request.onreadystatechange = function () {
				if (request.readyState === 4) {
					likes.innerText = e.likes++;
				}
			}
			request.send();
		});

		downArrow.addEventListener('click', () => {
			request.open('PUT', `/posts/${e.post_id}/downvote`, true);
			request.onreadystatechange = function () {
				if (request.readyState === 4) {
					likes.innerText = e.likes--;
				}
			}
			request.send();
		})

		
		
		
		
	})
};
request.send();

let linkCreator = document.querySelector('.link');
let shadow = document.querySelector('.shadow');
linkCreator.addEventListener('click', () => {
	shadow.classList = ('shadow visible')
});

let activeUser = document.querySelector('.activeuser');
let activeTitle = document.querySelector('.activetitle');
let activeUrl = document.querySelector('.activeurl');
let submitButton = document.querySelector('.activesubmit');

submitButton.addEventListener('click', () => {
	postRequest.open('POST', '/posts', true);
	postRequest.onreadystatechange = function () {
		if (request.readyState === 4) {
			shadow.className = ('shadow');
		}
	}
	postRequest.setRequestHeader('Content-Type', 'application/json');
	postRequest.send(
		JSON.stringify({
			title: activeTitle.value,
			url: activeUrl.value,
			author: activeUser.value,
		})
	);
});