declare var process: Process;

interface Process {
  env: Env;
}

interface Env {
  HUECONTROL_BRIDGE_IP: string;
  HUECONTROL_APPLICATION_KEY: string;
}

interface GlobalEnvironment {
  process: Process;
}
