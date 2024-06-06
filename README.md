# Aurora Dispenser

## Description

A nodeJS service that dispenses authBundles used by AuroraStore for anonymous logins


## Installation

1. Clone the project 
```
git clone https://gitlab.com/AuroraOSS/aurora-dispenser.git AuroraDispenser
cd AuroraDispenser
```

2. Install node modules
```
npm install
```

3. Build the project
```
sh build.sh
```

4. Add accounts
```
Create a txt file as accounts.txt in resources directory

Add you accounts in following format:
email1 aas_token
email2 aas_token
```

5. Run!!
```
npm start dist/src.app.js

# Alternatively you can also use pm2 to run the service
pm2 start dist/src/app.js --name my-dispenser
```

## Usage

Aurora Dispenser provided you following APIs:

1. `GET /api/auth`
   - Returns you an authBundle* generated on Dispenser with default device config.
2. `POST /api/auth`
   - Returns you an authBundle* generated on Dispenser with config** provided in body.
   

* See AuthBundle [here](https://gitlab.com/AuroraOSS/aurora-dispenser/-/blob/main/src/types.ts?ref_type=heads#L1-L19)
**See Config Format [here](https://gitlab.com/AuroraOSS/aurora-dispenser/-/raw/main/resources/arm64_xxhdpi.properties)


## AAS Token
AAS Token is a sort of AccessToken, that can be used to generate Auth/Bearer token with certain granted scope (PlayStore, Youtube, Gmail, etc)

- AAS Token do not expire, unless you change the account password.
- In limited scope, it can be used as your Google account password.

### How to generate AAS Token?
Use Authenticator app to generate AAS Token for your Google Account, download Authenticator from [here](https://github.com/whyorean/Authenticator/releases)



## Contact

For any questions, feedback, or other inquiries, reach out to rahul@auroraoss.com
