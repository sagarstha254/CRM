export type APiType = { isFlag?: boolean; response: any };
export type ServiceType = {
  add: APiType;
  delete: APiType;
  edit: APiType;
  view: APiType;
};
export type LeadFormSchema = {
  name: string;
};

export type CRMApi = {
  user: ServiceType;
};

export type UserPlatform = {
  add_LeadForm: LeadPlatformSchema;
};

export type LeadPlatformSchema = {
  id?: string | number | null;
  input: LeadFormSchema;
  details: Array<{
    name: string;
  }>;
};

export type CRMSliceSchema = {
  platform: {
    user: UserPlatform;
  };

  crm: CRMApi;
};
// Variables
export const InitialApiData = {
    isFlag: false,
    response: {
      details: [],
      error: "",
      isLoading: false,
      isSuccess: false,
      toastMsg: "",
    },
  },
  InitialServiceData = {
    add: InitialApiData,
    delete: InitialApiData,
    edit: InitialApiData,
    view: InitialApiData,
  };
