import ethereumIcon from '../../assets/images/ethereum_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';

export default class Values {
    static currency=[
        {iconName:'USD',value:'USD', iconImage:<span className="d-flex align-items-center"><img src={dollarsIcon} alt="" />USDT</span>},
        {iconName:'ETH',value: 'ethereum', iconImage:<span className="d-flex align-items-center"><img src={ethereumIcon} alt="" />ETH</span>},
        {iconName:'BTC',value:'bitcoin', iconImage:<span className="d-flex align-items-center"><img src={btcIcon} alt="" />BTC</span>},
    ]


    static options = [
        { value: 'USD', label: 'Chocolate' },
        { value: 'ethereum', label: 'Strawberry' },
        { value: 'bitcoin', label: 'Vanilla' }
      ]

}