const postContainer = document.querySelector('.left-content');

const postsCard = (post) => {
  const postCard = document.createElement('section');
  postCard.classList.add('posts-card');

  const votesSection = document.createElement('section');
  votesSection.classList.add('votes');
  postCard.appendChild(votesSection);

  const upVote = document.createElement('a');
  const upVoteIcon = document.createElement('i');
  upVoteIcon.classList.add('fas');
  upVoteIcon.classList.add('fa-angle-up');
  upVote.appendChild(upVoteIcon);
  votesSection.appendChild(upVote);

  const votesNumber = document.createElement('p');
  votesNumber.textContent = 0;
  votesSection.appendChild(votesNumber);

  const downVote = document.createElement('a');
  const downVoteIcon = document.createElement('i');
  downVoteIcon.classList.add('fas');
  downVoteIcon.classList.add('fa-angle-down');
  downVote.appendChild(downVoteIcon);
  votesSection.appendChild(downVote);
  postContainer.appendChild(postCard);

  const postContent = document.createElement('section');
  postContent.classList.add('post');

  const genreSection = document.createElement('section');
  genreSection.classList.add('genre');
  const genreText = document.createElement('p');
  genreText.textContent = 'Popular in Huomer';
  genreSection.appendChild(genreText);
  const line = document.createElement('hr');
  genreSection.appendChild(line);
  postContent.appendChild(genreSection);
  postCard.appendChild(postContent);

  const postInfoSection = document.createElement('section');
  postInfoSection.classList.add('post-info');

  const postTitleSection = document.createElement('section');
  postTitleSection.classList.add('post-title');
  const avatar = document.createElement('img');
  avatar.src = post.avatar;
  postTitleSection.appendChild(avatar);

  const ancor = document.createElement('a');
  ancor.innerHTML = `${post.username} &nbsp;`;
  postTitleSection.appendChild(ancor);
  const postedBy = document.createElement('p');
  postedBy.innerHTML = `Posted by <a>${post.username}</a> 14 hours ago`;
  postTitleSection.appendChild(postedBy);
  postInfoSection.appendChild(postTitleSection);
  postContent.appendChild(postInfoSection);

  const joinButtonSection = document.createElement('section');
  joinButtonSection.classList.add('post-join-btn');
  const joinButton = document.createElement('button');
  joinButton.textContent = 'Join';
  joinButtonSection.appendChild(joinButton);
  postInfoSection.appendChild(joinButtonSection)
  
  const postContentSection = document.createElement('section');
  postContentSection.classList.add('post-content');

  const postText = document.createElement('p');
  postText.textContent = post.content;
  postContentSection.appendChild(postText);

  postContent.appendChild(postContentSection);

  const reactionsSection = document.createElement('section');
  reactionsSection.classList.add('reactions');
  const firstIconAncor = document.createElement('a');
  const firstIcon = document.createElement('i');
  firstIcon.classList.add('fa-sharp');
  firstIcon.classList.add('fa-solid');
  firstIcon.classList.add('fa-message');
  const firstSpan = document.createElement('span');
  firstIconAncor.appendChild(firstIcon);
  firstIconAncor.appendChild(firstSpan);
  firstSpan.textContent = ' Comments';
  firstIconAncor.addEventListener('click', () => {
    location.href = `/post?id=${post.post_id}`;
  });
  reactionsSection.appendChild(firstIconAncor);

  const secondIconAncor = document.createElement('a');
  const secondIcon = document.createElement('i');
  secondIcon.classList.add('fa-sharp');
  secondIcon.classList.add('fa-solid');
  secondIcon.classList.add('fa-message');
  const secondSpan = document.createElement('span');
  secondIconAncor.appendChild(secondIcon);
  secondIconAncor.appendChild(secondSpan);
  secondSpan.textContent = ' Rewards';
  reactionsSection.appendChild(secondIconAncor);

  const thirdIconAncor = document.createElement('a');
  const thirdIcon = document.createElement('i');
  thirdIcon.classList.add('fa-sharp');
  thirdIcon.classList.add('fa-solid');
  thirdIcon.classList.add('fa-share');
  const thirdSpan = document.createElement('span');
  thirdIconAncor.appendChild(thirdIcon);
  thirdIconAncor.appendChild(thirdSpan);
  thirdSpan.textContent = ' Rewards';
  reactionsSection.appendChild(thirdIconAncor);

  const fourthIconAncor = document.createElement('a');
  const fourthIcon = document.createElement('i');
  fourthIcon.classList.add('fa-sharp');
  fourthIcon.classList.add('fa-solid');
  fourthIcon.classList.add('fa-ellipsis');
  const fourthSpan = document.createElement('span');
  fourthIconAncor.appendChild(fourthIcon);
  fourthIconAncor.appendChild(fourthSpan);
  fourthSpan.textContent = ' More';
  reactionsSection.appendChild(fourthIconAncor);

  postContent.appendChild(reactionsSection);
};

fetch('/api/v1/posts/feed')
  .then((data) => data.json())
  .then((posts) => {
    posts.forEach((post) => postsCard(post));
});

