export interface testData {
    owllyId: string; //vrrYZoolx2XSy23RW63f für echtdaten von datenbank / "test" für demodaten via post
    owllyData: {
      //optional owllydata -> wird anhand owllyId im backend gelesen.

      level: string;
      supporters: string;
      text: string;
      title: string;
      type: string;
      published: string;
      author: string;
      ruleName: string;
      ruleValue: string;
    },
    userData: {
      sub: string;
      given_name: string;
      family_name: string;
      birth_date: string;
      locality: string;
      postal_code: string;
      street_address: string;
    },
}