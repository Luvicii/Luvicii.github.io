var posts=["2025/06/17/强风吹拂-a-beautiful-story/","2025/06/17/我的卡托维兹之旅/","2025/06/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };