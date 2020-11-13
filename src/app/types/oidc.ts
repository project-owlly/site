export interface OidAuthDataRequest {
  owllyId: string;
}

// tslint:disable-next-line:no-empty-interface
export interface OidAuthLoginDataRequest {}

export interface OidAuth {
  url: string;
  owllyId?: string;
}
