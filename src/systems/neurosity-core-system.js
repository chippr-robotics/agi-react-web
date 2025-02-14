import { Neurosity } from "@neurosity/sdk";
import('aframe');

AFRAME.registerSystem('neurosity-core-system', {
    schema: {
        deviceId: {type: 'string', default: '33ee5af8659c56068d5b90c157313114'},
        loading: {type: 'boolean', default: true},
        user: {type: 'string'},
        neurosity: {type: 'string', default: '{}'},
    },
    init: function() {
        console.log('neurosity-core-system loaded successfully');
        this.statusConsumers = [];
        this.neurosity = {};
    },

    addDevice: async (_id) => {
        this.data.neurosity = new Neurosity( _id );
        //clear any logins
        this.neurosity.logout().catch((error) => {
            console.log("Log out error", error);
          });
        console.log("device loaded: ", this.data);
    },

    activate: function() {
        console.log('activated');
        this.el.addEventListener('neurosityStatus', (e)=>{
            console.log('event received core-system', e);
            this.statusConsumers.forEach( el => {
                //console.log('element: ', el);
                el.setAttribute('neurosity-status-consumer','state', e.details.state);
                el.setAttribute('neurosity-status-consumer','sleepMode', e.details.state);
                el.setAttribute('neurosity-status-consumer','sleepModeReason', e.details.state);
                el.setAttribute('neurosity-status-consumer','charging', e.details.state);
                el.setAttribute('neurosity-status-consumer','battery', e.details.state);
                el.setAttribute('neurosity-status-consumer','lastHeartbeat', e.details.state);
                el.setAttribute('neurosity-status-consumer','ssid', e.details.state);
                el.setAttribute('neurosity-status-consumer','claimedBy', e.details.claimedBy);
            })
        })
    },
    registerStatusConsumers: function(el){
        console.log('added new statusConsumer', el);
        this.statusConsumers.push(el);
      },

    unregisterStatusConsumers: function(el){
        var index = this.statusConsumers.indexOf(el);
        this.statusConsumers.splice(index, 1);
    },
    
    });
