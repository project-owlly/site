export interface OidAuthDataRequest {
  state: string; // currently owllyId
}

export interface OidAuth {
  url: string;
  state: string | undefined;
}
