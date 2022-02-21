import React from 'react'
import ListMenuItem from './ListMenuItem';

export default function Menu() {

    const menu_list = [{
        'seccion': 'seccion 1',
        'menu': [
            {
                'nombre': 'Principal',
                'submenu':[
                    {
                        'nombre': 'Dashboard 1',
                    },
                    {
                        'nombre': 'Dashboard 2',
                    },                   
                ]
                
            },
            {
                'nombre': 'Secundaria',
                'submenu':[
                    {
                        'nombre': 'Dashboard 3',
                    },
                    {
                        'nombre': 'Dashboard 4',
                    },                   
                ]
            }]
    }]

    return (
        <>
            <ListMenuItem listMenus={menu_list} />

        </>

    )
}
