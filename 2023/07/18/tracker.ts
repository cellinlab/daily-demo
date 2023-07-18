class Tracker {
  private projectId: string;
  private PV_URL_SET = new Set();

  constructor(projectId: string) {
    this.projectId = projectId;

    this.initPerformance();

    this.initError();
  }

  // Send data to server
  private send(url: string, params: Object = {}) {
    params.projectId = this.projectId;

    const paramsArr = [];
    for (const key in params) {
      paramsArr.push(`${key}=${params[key]}`);
    }

    const img = document.createElement('img');
    img.src = `${url}?${paramsArr.join('&')}`;
  }

  // track performance
  private initPerformance() {
    const url = 'http://localhost:3000/performance';
    const performance = window.performance;
    this.send(url, {
      data: performance.timing
    });
  }

  // track error
  private initError() {
    window.addEventListener('error', (event) => {
      const { error, lineno, colno } = event;
      this.error(error, { lineno, colno });
    });

    window.addEventListener('unhandledrejection', (event) => {
      const { reason } = event;
      this.error(reason);
    });
  }

  // track event
  public event(event: string, params: Object = {}) {
    const url = 'http://localhost:3000/event';
    this.send(url, {
      event,
      ...params
    });
  }

  // track page view
  public pageView(params: Object = {}) {
    const href = window.location.href;
    if (this.PV_URL_SET.has(href)) {
      return;
    }

    this.event('pageView', {});

    this.PV_URL_SET.add(href);
  }

  public identify(params: Object = {}) {
    // identify user
  }

  public error(error: Error, params: Object = {}) {
    const url = 'http://localhost:3000/error';
    this.send(url, {
      error: error.message,
      ...params
    });
  }
}