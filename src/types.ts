export interface AuthBundle {
  aasToken?: string;
  ac2dmToken?: string;
  androidCheckInToken?: string;
  authToken: string;
  deviceCheckInConsistencyToken: string;
  deviceConfigToken: string;
  deviceInfoProvider?: DeviceInfoProvider;
  dfeCookie: string;
  email: string;
  experimentsConfigToken: string;
  gcmToken?: string;
  gsfId: string;
  isAnonymous: boolean;
  locale: string;
  oAuthLoginToken?: string;
  tokenDispenserUrl: string;
  userProfile?: any;
}

export interface AnonymousAuthBundle {
  email: string;
  auth: string;
}

export interface Account {
  email: string;
  aasToken: string;
  password?: string;
}

export interface DeviceInfoProvider {
  authUserAgentString: string;
  localeString: string;
  mccMnc: string;
  playServicesVersion: number;
  properties?: any;
  userAgentString: string;
  sdkVersion: number;
}