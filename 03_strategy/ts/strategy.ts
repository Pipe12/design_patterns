interface IStrategy {
  login(user: string, password: string) : boolean;
}

class LoginContext {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class loginDBStrategy implements IStrategy {
  login(user: string, password: string) {
    console.log('Nos dirigimos a la base de datos');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}

class loginServiceStrategy implements IStrategy {
  login(user: string, password: string) {
    console.log('Nos dirigimos al servicio de auth');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}

class loginGoogleStrategy implements IStrategy {
  login(user: string, password: string) {
    console.log('Nos dirigimos a Google de auth');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}


const auth = new LoginContext(new loginDBStrategy());
auth.login('admin', 'entra');
auth.setStrategy(new loginServiceStrategy());
auth.login('admin', 'entra');
auth.setStrategy(new loginGoogleStrategy());
auth.login('admin', 'entra');