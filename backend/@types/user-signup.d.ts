type Iuser = {
name: Iname;
isBusiness: boolean;
address: Iaddress;
email: string;
PhoneNumber: string;
image: Iimage;
password: string;
isAdmin: boolean;
_id: string,
}; 

type Iaddress = {
state?: string;
country: string;
city: string;
street: string;
houseNumber: Number;
zip?: Number;
}

type Iimage = {
url: string;
alt: string;
}

type Iname = {
    first: string;
    middle?: string;
    last: string;
}

type Ilogin = {
    email: string;
    password: string;
  };

  type Ijwtpayload = {
    email: string;
    isAdmin: boolean;
  };

export { Iaddress, Iimage, Iname, Iuser, Ilogin, Ijwtpayload };
