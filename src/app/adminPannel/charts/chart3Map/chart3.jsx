'use client'
import { world_map } from './world_map';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Zoom, Inject, MapsTooltip, NavigationLine, NavigationLinesDirective, NavigationLineDirective } from './../../../../../map/node_modules/@syncfusion/ej2-react-maps';
import { registerLicense } from './../../../../../map/node_modules/@syncfusion/ej2-base'
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVZpR2Nbe054flFGal5ZVAciSV9jS3pTdEdkWXdacHZdRmdfWA==');
export default function App() {
        return (
                <div className='w-full flex justify-center bg-bn2 mx-2 mt-3'>
                        <MapsComponent className='cursor-pointer flex justify-center items-center rounded-lg' width='90%' height='100%' background='#403468  ' mapsArea={{ background: '#403468 ' }} zoomSettings={{ enable: true, enablePanning: true }} >
                        <Inject services={[Zoom, Marker, NavigationLine, MapsTooltip]} />

                        <LayersDirective>
                                <LayerDirective shapeData={world_map} shapeSettings={{ fill: '#1b1b37' }}  >
                                        <NavigationLinesDirective>

                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 41.0082]}
                                                        longitude={[2.349014, 28.9784]}
                                                        color="#0f8874"
                                                        angle={0}
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                size: 15,
                                                                position: 'Start'
                                                        }} />
                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 52.5200]}
                                                        longitude={[2.349014, 13.4050]}
                                                        color="#0f8874"
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                size: 15,
                                                                position: 'start',
                                                        }} />
                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 49.2827]}
                                                        longitude={[2.349014, 123.1207]}
                                                        color="#0f8874"
                                                        angle={120}
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                size: 15,
                                                                position: 'start',
                                                        }} />
                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 40.730610]}
                                                        longitude={[2.349014, -73.935242]}
                                                        color="#0f8874"
                                                        angle={120}
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                size: 15,
                                                                position: 'start',
                                                        }} />
                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 34.0549]}
                                                        longitude={[2.349014, 118.2426]}
                                                        color="#0f8874"
                                                        angle={-10}
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                size: 15,
                                                                position: 'start',
                                                        }} />
                                                <NavigationLineDirective visible={true}
                                                        latitude={[48.864716, 51.3347]}
                                                        longitude={[2.349014, 35.7219]}
                                                        color="#0f8874"
                                                        angle={0}
                                                        width={2}
                                                        dashArray="4"
                                                        arrowSettings={{
                                                                // showArrow: true,
                                                                size: 15,
                                                                position: 'Start'
                                                        }} />
                                        </NavigationLinesDirective>

                                        <MarkersDirective  >

                                                <MarkerDirective visible={true}
                                                        height={230}
                                                        width={20}
                                                        animationDuration={1}
                                                        template='<div style="font-size: 15px;color:#0f8874;margin-right:70px" id="marker1">Tehran</div>'
                                                        dataSource={[{ latitude: 48.864716, longitude: 2.349014 }]}
                                                >
                                                </MarkerDirective>

                                                <MarkerDirective visible={true}
                                                        height={20}
                                                        width={20}
                                                        animationDuration={0}
                                                        fill='#b18aff'
                                                        dataSource={[
                                                                { 'name': "Tehran", latitude: 48.864716, longitude: 2.349014 },
                                                                { 'name': "Paris", latitude: 51.3347, longitude: 35.7219 },
                                                                { 'name': "Istanbul", latitude: 41.0082, longitude: 28.9784 },
                                                                { 'name': "Berlin", latitude: 52.5200, longitude: 13.4050 },
                                                                { 'name': "Madrid", latitude: 40.4168, longitude: 3.7038 },
                                                                { 'name': "Vancouver", latitude: 49.2827, longitude: 123.1207 },
                                                                { 'name': "New York", latitude: 40.730610, longitude: -73.935242 },
                                                                { 'name': "Los Angeles", latitude: 34.0549, longitude: 118.2426 },
                                                                { 'name': "Beijing ", latitude: 39.9042, longitude: 116.4074 },
                                                        ]}
                                                >
                                                </MarkerDirective>
                                        </MarkersDirective>
                                </LayerDirective>
                        </LayersDirective>
                </MapsComponent></div>
        );
}