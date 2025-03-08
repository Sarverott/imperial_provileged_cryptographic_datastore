


class AccessLaw{
    static MOUNT(atPoint, mapTap){
        this[atPoint]=Object.fromEntries(
            new Map(mapTap)
        );
        return this;
    }
    static DEFINE(name, entity){
        //determinedListing
        Object.assign(this, Object.fromEntries(new Set([[name,entity]])));
        //    ErrorBase: 
        //    DenineBase:
        //    SpecifierBase: RegExp,
        //    ReactionBase: function* () {}.constructor
        //}
        return this;
    }

}