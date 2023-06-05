/*  Copyright Dominic Krimmer <https://www.dkrimmer.de>
    License MIT (https://opensource.org/licenses/MIT). */
    odoo.define('l10n_co_pos_uvt.pos_uvt', function (require) {
        'use strict';
    
        var models = require('point_of_sale.models');
        var screens = require('point_of_sale.screens');
        models.load_fields('pos.config', ['uvt_value']);
    
        screens.PaymentScreenWidget.include({
            validate_order: function (force_validation) {
                var self = this;
                var order = this.pos.get_order();
                var orderTotal = order.get_total_with_tax();
                var uvt_value = this.pos.config.uvt_value;
                
                if (uvt_value !== undefined && 
                    uvt_value !== false &&
                    uvt_value > 0) {
                    console.log("Total:", orderTotal);
                    console.log("Is Electronic Invoice:", order.is_to_electronic_invoice);

                    // Validate if total order is greater than uvt_value and electronic invoice is not active
                    if(orderTotal > uvt_value && !order.is_to_electronic_invoice()) {
                        self.gui.show_popup('error', { // Show error popup
                            'title': _t('Factura Error'),
                            'body': _t('Facturas con un valor superior a $212.060 deben ser registradas electrónicamente.'),
                        });
                        return;
                    }
                }
                this._super(force_validation);
            },
        });
    });
        