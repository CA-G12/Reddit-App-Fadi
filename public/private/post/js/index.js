const postContainer = document.querySelector('.posts-section');
const CommentContainer = document.querySelector('.comments-thread');
const navbar = document.querySelector('.navbar');

const profileInfoCard = () => {
  const profileSection = document.createElement('section');
  profileSection.classList.add('profile');

  const imgSection = document.createElement('div');
  const avatar = document.createElement('img');
  avatar.src = 'https://pbs.twimg.com/profile_images/1559252590696828929/BsqrxPyi_400x400.jpg';
  imgSection.appendChild(avatar);

  profileSection.appendChild(imgSection);

  const profileInfo = document.createElement('div');
  profileInfo.classList.add('profile-info');
  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = 'mynameinitials';
  profileInfo.appendChild(username);

  const karams = document.createElement('p');
  karams.classList.add('karams');
  karams.textContent = '1 karams';
  profileInfo.appendChild(karams);

  profileSection.appendChild(profileInfo);
  navbar.appendChild(profileSection);
};

const postsCard = () => {
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
  votesNumber.textContent = 6;
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
  avatar.src = 'https://pbs.twimg.com/profile_images/1559252590696828929/BsqrxPyi_400x400.jpg';
  postTitleSection.appendChild(avatar);

  const ancor = document.createElement('a');
  ancor.innerHTML = 'r/betterCallSaul &nbsp;';
  postTitleSection.appendChild(ancor);
  const postedBy = document.createElement('p');
  postedBy.innerHTML = 'Posted by <a>u/CoolBen07</a> 14 hours ago';
  postTitleSection.appendChild(postedBy);
  postInfoSection.appendChild(postTitleSection);
  postContent.appendChild(postInfoSection);

  const joinButtonSection = document.createElement('section');
  joinButtonSection.classList.add('post-join-btn');
  const joinButton = document.createElement('button');
  joinButton.textContent = 'Join';
  joinButtonSection.appendChild(joinButton);
  postInfoSection.appendChild(joinButtonSection);
  const postContentSection = document.createElement('section');
  postContentSection.classList.add('post-content');

  const postText = document.createElement('p');
  postText.textContent = 'Why does Jimmy wear the Wayfarer Ribbon in the finale?';
  postContentSection.appendChild(postText);

  postContent.appendChild(postContentSection);
};

const CommentsCard = () => {
  const commentCard = document.createElement('section');
  commentCard.classList.add('comments');

  const commentorInfo = document.createElement('commenter-info');
  commentorInfo.classList.add('commenter-info');

  const commenterImg = document.createElement('img');
  commenterImg.src = 'https://pbs.twimg.com/profile_images/1559252590696828929/BsqrxPyi_400x400.jpg';
  commentorInfo.appendChild(commenterImg);

  const commenterUsername = document.createElement('a');
  commenterUsername.textContent = 'Antique-Inspector-48';
  commenterUsername.href = '';
  commentorInfo.appendChild(commenterUsername);
  commentCard.appendChild(commentorInfo);

  const comment = document.createElement('section');
  comment.classList.add('comment');
  const commentContent = document.createElement('p');
  commentContent.textContent = 'Good edit, but I honestly consider this one of the darkest moments in the show (much more than the last few scenes) so the song is a lil too upbeat lol';
  comment.appendChild(commentContent);
  commentCard.appendChild(comment);

  const commentReactionsSection = document.createElement('section');
  commentReactionsSection.classList.add('comments-reactions');
  const commentUpVote = document.createElement('a');
  const upVoteIcon = document.createElement('i');
  commentUpVote.classList.add('fas');
  commentUpVote.classList.add('fa-angle-up');
  commentUpVote.appendChild(upVoteIcon);
  commentReactionsSection.appendChild(commentUpVote);
 
  const votesCount = document.createElement('p');
  votesCount.textContent = 6;
  commentReactionsSection.appendChild(votesCount);

  const commentDownVote = document.createElement('a');
  const downVoteIcon = document.createElement('i');
  commentDownVote.classList.add('fas');
  commentDownVote.classList.add('fa-angle-down');
  commentDownVote.appendChild(downVoteIcon);
  commentReactionsSection.appendChild(commentDownVote);
  
  const reactionButtons = document.createElement('section');
  reactionButtons.classList.add('reactions-buttons');
  const share = document.createElement('a');
  share.textContent = 'Share';
  const save = document.createElement('a');
  save.textContent = 'Save';
  const report = document.createElement('a');
  report.textContent = 'Report';
  const follow = document.createElement('a');
  follow.textContent = 'Follow';

  reactionButtons.appendChild(share);
  reactionButtons.appendChild(save);
  reactionButtons.appendChild(report);
  reactionButtons.appendChild(follow);
  commentReactionsSection.appendChild(reactionButtons);
  commentCard.appendChild(commentReactionsSection);
  CommentContainer.appendChild(commentCard);
};
profileInfoCard();
postsCard();
CommentsCard();
CommentsCard();
CommentsCard();
CommentsCard();
