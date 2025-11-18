import V1Payment from './clients/v1/payment';
import V1General from './clients/v1/general';
import V1Payout from './clients/v1/payout';
import V1Common from './clients/v1/common';

export default {
    v1: {
        payment: V1Payment,
        general: V1General,
        payout: V1Payout,
        common: V1Common,
    },

}
