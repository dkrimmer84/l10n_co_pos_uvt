from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    uvt_value = fields.Float(
        string='Valor UVT',
        help='Define el valor UVT',
        default=0.0,
        store=True
    )