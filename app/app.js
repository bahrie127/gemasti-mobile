Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img width="65%" src="resources/images/logo.png" />',
                        '<h1>Kemahasiswaan FTI UKSW</h1>',
                        "<p>Dapatkan kemudahan akses kemahasiswaan fti uksw via<br/>",
                            "mobile application </p>",
                        '<h2>Club Informatics Adisutjipto 2012</h2>'
                    ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'BPM',
                    iconCls: 'star',
                    displayField: 'nama_bagian',

                    store: {
                        type: 'tree',

                        fields: [
                            'badan_perwakilan_mahasiswa_id', 'nama_bagian', 'ketua', 'sekretaris', 'gambar','deskripsi',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://localhost/gemasti/index.php/mobile/bpm/get_all',
                            reader: {
                                type: 'json',
                                rootProperty: 'data'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('deskripsi'));
                        }
                    }
                },{
                    xtype: 'nestedlist',
                    title: 'SEMA',
                    iconCls: 'star',
                    displayField: 'nama_bagian',

                    store: {
                        type: 'tree',

                        fields: [
                            'badan_perwakilan_mahasiswa_id', 'nama_bagian', 'ketua', 'sekretaris', 'gambar','deskripsi',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://localhost/gemasti/index.php/mobile/bpm/get_all',
                            reader: {
                                type: 'json',
                                rootProperty: 'data'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('deskripsi'));
                        }
                    }
                },{
                    xtype: 'nestedlist',
                    title: 'HM',
                    iconCls: 'star',
                    displayField: 'nama_bagian',

                    store: {
                        type: 'tree',

                        fields: [
                            'badan_perwakilan_mahasiswa_id', 'nama_bagian', 'ketua', 'sekretaris', 'gambar','deskripsi',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://localhost/gemasti/index.php/mobile/bpm/get_all',
                            reader: {
                                type: 'json',
                                rootProperty: 'data'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('deskripsi'));
                        }
                    }
                },{
                    xtype: 'nestedlist',
                    title: 'UKM',
                    iconCls: 'star',
                    displayField: 'nama_bagian',

                    store: {
                        type: 'tree',

                        fields: [
                            'badan_perwakilan_mahasiswa_id', 'nama_bagian', 'ketua', 'sekretaris', 'gambar','deskripsi',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'http://localhost/gemasti/index.php/mobile/bpm/get_all',
                            reader: {
                                type: 'json',
                                rootProperty: 'data'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('deskripsi'));
                        }
                    }
                }

            ]
        });
    }
});
