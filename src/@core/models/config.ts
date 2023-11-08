export type Config = {
  app: string;
  version: string;
  local_printer: string;
  codes: string;
  clients: Client[];
}

export type Client = {
  name: string;
  env: string;
  prefix: string;
  config: ClientConfig;
}

export type ClientConfig = {
  base_url: string,
  bo_website: string,
}
