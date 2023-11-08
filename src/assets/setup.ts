export const CONFIG = {
    "app": "My app",
    "version": "0.0.1",
    "local_printer": "http://127.0.0.1:44300",
    "codes": "my_app_uat",
    "clients": {
        "my_app_uat": {
          "name": "UAT",
          "env": "uat",
          "prefix": "abc",
          "config": {
            "base_url": "https://api-nmni-uat.ecr-aws.co.uk",
            "bo_website": "https://nmni-booking-uat-temp.ecr-aws.co.uk",
          }
        }
    }
}
