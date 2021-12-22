const refs = {
  ball: document.querySelector('#ball'),
  root: document.querySelector('#root'),
};

const moveBall = _.throttle((step = 1, dir = 'x') => {
  const nowPos = {
    x: parseInt(refs.ball.style.left),
    y: parseInt(refs.ball.style.top),
  };
  const maxPos = {
    topR: {
      x: refs.root.clientWidth - refs.ball.offsetWidth,
      y: 0,
    },
    bottomR: {
      x: refs.root.clientWidth - refs.ball.offsetWidth,
      y: refs.root.clientHeight - refs.ball.offsetHeight,
    },
    bottomL: {
      x: 0,
      y: refs.root.clientHeight - refs.ball.offsetHeight,
    },
    topL: {
      x: 0,
      y: 0,
    },
  };

  nowPos[dir] += step;

  refs.ball.style.left = nowPos.x + 'px';
  refs.ball.style.top = nowPos.y + 'px';

  if (maxPos.topR.x === nowPos.x && dir === 'x') {
    dir = 'y';
  } else if (maxPos.bottomR.y === nowPos.y && dir === 'y') {
    dir = 'x';
    step *= -1;
  } else if (maxPos.bottomL.x === nowPos.x && dir === 'x') {
    dir = 'y';
  } else if (maxPos.topL.y === nowPos.y && dir === 'y') {
    dir = 'x';
    step *= -1;
  }
  // moveBall(step, dir);
}, 10);

moveBall();
