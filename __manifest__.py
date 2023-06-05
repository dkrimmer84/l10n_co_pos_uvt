# Copyright Dominic Krimmer <https://www.dkrimmer.de>
# License MIT (https://opensource.org/licenses/MIT).
{
    'name': 'Colombia POS UVT',
    'version': '12.0.1.0.0',
    'category': 'Point of Sale',
    'author': 'Dominic Krimmer',
    'website': 'https://www.dkrimmer.de',
    'license': 'AGPL-3',
    'summary': 'A partir del 1 de abril de 2023, según la DIAN, todas las facturas con un valor superior a un valor especifico deben ser registradas electrónicamente.',
    'depends': ['point_of_sale', 'l10n_co_edi_jorels_pos'],
    'data': [
        'views/l10n_co_pos_uvt_views.xml',
        'views/assets.xml'
    ],
    'installable': True,
    'auto_install': False,
}