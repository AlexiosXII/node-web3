require('dotenv').config()
const prompts = require('prompts');
const Web3 = require('web3');
const fs = require('fs');
const transaction = require('./batch/transaction')

async function main() {
    const web3 = new Web3(process.env.PROVIDER);
    // const loader = setupLoader({
    //     provider: web3
    // }).web3;
    let input = 0
    let account = null;
    try {
        console.log('getting account...');
        const jsonString = fs.readFileSync(process.env.ACCOUNT_PATH)
        account = JSON.parse(jsonString)
        account = web3.eth.accounts.privateKeyToAccount(account.privateKey)
    } catch (error) {
        console.log('read account file error, creating new account...');
        account = web3.eth.accounts.create();
        account = JSON.stringify(account)
        fs.writeFile(process.env.ACCOUNT_PATH, account, 'utf8', (callback) => {});
        console.log('new account created.');
    }
    console.log(account);
    console.log(`account ${account.address} loaded.`);
    do {
        const promptsRes = await prompts({
            type: 'number',
            name: 'option',
            message: 'batch list:',
            initial: `\n1. signTransaction\n2. exit\nYep! it 's just has only one thing to do.`,
        });

        switch (promptsRes.option) {
            case 1:
                console.log('sending transaction...');
                // await transaction.sendTransaction(web3)
                break;
            case 2:
                console.log('bye ! have a nice day !');
                input = -1
            break;
            default:
                break;
        }
    } while (input !== -1);
}
main()