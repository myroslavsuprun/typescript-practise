type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}

// create a function that change level of incoming developer
function gradeDeveloper(user: {level: Level}, newLevel: Level): void {
  user.level = newLevel;
  if (user.level === 'junior') {
    user.level = 'middle';
  } else if (user.level = 'middle') {
    user.level = 'senior';
  }
}

const dev1: Developer = {
  login: 'adata',
  skills: ['no skills'],
  level: 'junior'
}
 
// gradeDeveloper(dev1);