{
    'name': 'Odoo e2e-Data BI Application',
    'version': '1.0.0',
    'category': 'Reporting/Business Intelligence',
    'summary': 'Integrated BI Dashboard from the e2e-Data platform',
    'description': """ This module provides a Business inteligence features """,
    'depends': ['web'],
    'author': 'Nakassony Bernardo',
    'maintainer': 'Nakassony Bernardo',
    'data': [
        'views/actions.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo-e2e-bi/static/src/js/main.js',
            'odoo-e2e-bi/static/src/xml/main.xml',
            'odoo-e2e-bi/static/src/js/settings.js',
            'odoo-e2e-bi/static/src/xml/settings.xml',
        ],
    },
}