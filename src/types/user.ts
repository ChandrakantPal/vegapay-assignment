export interface Address {
  id: number;
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface Identity {
  id: number;
  customerId: string;
  clientId: string;
  idType: string;
  idNumber: string;
  idVerified: string;
  url: string | null;
}

export interface Account {
  id: string;
  customerId: string;
  branchId: string;
  programId: string;
  primaryCardId: string;
  walletId: string;
  status: string;
  corporateCustomerId: string | null;
  accountLimit: number;
  programName: string;
  branchName: string;
  checkerMakerId: string;
  checkerMakerStatus: string;
}

export interface Customer {
  customerId: string;
  clientId: string;
  title: string | null;
  firstName: string;
  middleName: string | null;
  lastName: string;
  customerType: string;
  countryCode: string;
  mobileNumber: string;
  emailId: string;
  identity: Identity[];
  dob: string;
  gender: string;
  currentAddress: Address;
  isCurrentAddressPermanent: string;
  permanentAddress: Address;
  nationality: string | null;
  status: string;
  kycStatus: string;
  creationVector: string;
  selfieUrl: string | null;
  createdAt: string;
  updatedAt: string;
  communicationPinCode: string | null;
  riskScore: string | null;
  bureauScore: string | null;
  branchId: string;
  corporateId: string | null;
  docsUrl: Record<string, string>;
  makerCheckerId: string;
  makerCheckerStatus: string;
  fullName: string;
}

export interface SubWallet {
  id: string;
  walletId: string;
  ledgerId: string;
  type: string;
  currency: string;
  status: string;
  totalBalance: number;
  holdBalance: number;
  availableBalance: number;
  createdAt: string | null;
  updatedAt: string;
}

export interface Card {
  id: string;
  accountId: string;
  binId: number;
  binEntityType: string | null;
  entityId: string | null;
  vendorId: string;
  vendorCardNumber: string;
  cardType: string;
  cardNetwork: string;
  cardStatus: string;
  lastFourDigits: string;
  cardNumber: string;
  expiryDate: string;
  cardCategory: string | null;
  pinStatus: string;
  replacedCardId: string | null;
  reasonForReplacement: string | null;
  nameOnCard: string | null;
  countryCode: string;
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  primary: boolean;
}

export interface SearchedResultType {
  account: Account | null;
  customer: Customer;
  subWallets: SubWallet[] | null;
  card: Card | null;
}

export interface PaginationType {
  pageNumber: number;
  numberOfItems: number;
  totalPages: number;
  totalItems: number;
}
