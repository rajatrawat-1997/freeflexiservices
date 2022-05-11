import React from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,}
from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './ReferFriend_Faq.scss';

export default function ReferFriend_Faq() {
    return (
        <div className="bg_white">
            <div className="container">
                <div className="rf_faq_section">
                    <div className="rf_sectionHD d-flex justify-content-center">
                        <h2>FAQs</h2>
                    </div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <ul>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer.</li>
                                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</li>
                                    </ul>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <ul>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer.</li>
                                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</li>
                                    </ul>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <ul>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer.</li>
                                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</li>
                                    </ul>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    On the other hand, we denounce with righteous indignation ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <ul>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer.</li>
                                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</li>
                                    </ul>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>  
        </div>      
    );
}