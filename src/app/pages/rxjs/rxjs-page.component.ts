import { Component, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription, filter, interval, map, of, range } from "rxjs";

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html',
    styleUrl: './rxjs-page.component.css'
})
export class RxJsPage implements OnInit, OnDestroy {
        
    items: Array<string> = [];
    items2: Array<number> = [];
    items3: Array<number> = [];

    observable = of('item 1');
    observable2 = interval(1000);
    observable3 = range(1, 10);

    subscription!: Subscription;
    subscription2!: Subscription;
    subscription3!: Subscription;
    subscriptionList: Array<Subscription> = [];

    subject = new BehaviorSubject("valor inicial");
    ultimoEvento = "";
    contador = 1;

    ngOnInit() {
        this.subscription = this.observable.subscribe((item) => {
            this.items.push(item)
        });

        this.subscription2 = this.observable2
        .pipe(
            map((x) => x * 2),
            filter(x => x <= 10)
        )
        .subscribe((item2) => {
            this.items2.push(item2)
        });

        this.subscription3 = this.observable3.subscribe((item) => {
            this.items3.push(item)
        });

        this.subscriptionList.push(this.subscription);
        this.subscriptionList.push(this.subscription2);
        this.subscriptionList.push(this.subscription3);

        this.subject.asObservable().subscribe((item) => {
            this.ultimoEvento = item;
        });
    }

    desativarSubscription() {
        this.subscriptionList.forEach((sub) => {
            sub.unsubscribe();
        });        
    }

    ngOnDestroy(): void {
        this.subscriptionList.forEach((sub) => {
            sub.unsubscribe();
        });
    }    

    emitirEvento() {
        this.subject.next("Proximo item " + this.contador);
        this.contador++;
    }
}