const postContainer = document.querySelector('.posts-section');
const CommentContainer = document.querySelector('.comments-thread');
const commentBtn = document.querySelector('.submit-comment');
const commentInput = document.querySelector('.comment-input');
const navbar = document.querySelector('.navbar');
const backLogo = document.querySelector('.back-logo');
const backText = document.querySelector('.back-text');

const getUserName = () => {
  const url = location.href;
  const username = url.split('/')[5];
  return username;
};

backLogo.href = `/pages/profile/${getUserName()}`;
backText.href = `/pages/profile/${getUserName()}`;

const getPostId = () => {
  const url = location.href;
  const postId = url.split('/')[6];
  return postId;
};

const profileInfoCard = (profile) => {
  const profileSection = document.createElement('section');
  profileSection.classList.add('profile');

  const imgSection = document.createElement('div');
  const avatar = document.createElement('img');
  avatar.src = profile.avatar;
  imgSection.appendChild(avatar);

  profileSection.appendChild(imgSection);

  const profileInfo = document.createElement('div');
  profileInfo.classList.add('profile-info');
  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = profile.username;
  profileInfo.appendChild(username);

  const karams = document.createElement('p');
  karams.classList.add('karams');
  karams.textContent = '1 karams';
  profileInfo.appendChild(karams);

  const logoutBtn = document.createElement('button');
  logoutBtn.classList.add('logout');
  logoutBtn.textContent = 'Logou';
  profileSection.appendChild(logoutBtn);

  profileSection.appendChild(profileInfo);
  navbar.appendChild(profileSection);
};

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
  postInfoSection.appendChild(joinButtonSection);
  const postContentSection = document.createElement('section');
  postContentSection.classList.add('post-content');

  const postText = document.createElement('p');
  postText.textContent = post.content;
  postContentSection.appendChild(postText);

  postContent.appendChild(postContentSection);
};

const CommentsCard = (userComment) => {
  const commentCard = document.createElement('section');
  commentCard.classList.add('comments');

  const commentorInfo = document.createElement('commenter-info');
  commentorInfo.classList.add('commenter-info');

  const commenterImg = document.createElement('img');
  commenterImg.src = userComment.avatar;
  commentorInfo.appendChild(commenterImg);

  const commenterUsername = document.createElement('a');
  commenterUsername.textContent = userComment.username;
  commenterUsername.href = '';
  commentorInfo.appendChild(commenterUsername);
  commentCard.appendChild(commentorInfo);

  const comment = document.createElement('section');
  comment.classList.add('comment');
  const commentContent = document.createElement('p');
  commentContent.textContent = userComment.content;
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

fetch(`/api/v1/users/${getUserName()}`)
  .then((data) => data.json())
  .then((profile) => profileInfoCard(profile[0]))
  .catch((err) => alert(err));

fetch(`/api/v1/posts/post/${getPostId()}`)
  .then((data) => data.json())
  .then((post) => postsCard(post[0]))
  .catch((err) => alert(err));

fetch(`/api/v1/comments/${getPostId()}`)
  .then((data) => data.json())
  .then((comments) => {
    comments.forEach((userComment) => {
      CommentsCard(userComment);
    });
  });

commentBtn.addEventListener('click', () => {
  fetch(`/api/v1/users/${getUserName()}`)
    .then((data) => data.json())
    .then((user) => {
      fetch('/api/v1/comments/new-comment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          content: commentInput.value,
          userId: user[0].id,
          postId: getPostId(),
        }),
      }).then((data) => location.reload()).catch((err) => console.log(err));
    });
});
