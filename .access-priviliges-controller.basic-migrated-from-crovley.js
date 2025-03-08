



AccessLaw.MOUNT(
    "BASIS"
    [
        ["IssueAdapter", Error],
        ["RuleProvide", Proxy],
        ["Specifier", RegExp],
        ["CallerEntity", WeakRef],
        ["QueriedEntities",WeakMap],
        ["DenineAction",function* () {}.constructor],
        ["ApproveReach",function* () {}.constructor]
    ]
);


class AccessLaw{
    static MOUNT(atPoint, mapTap){
        this[atPoint]=Object.fromEntries(
            new Map(mapTap)
        );
        return this;
    }
    static DEFINE(...determinedListing){
        //determinedListing
        
        //Object.assign(this, {
        //    ErrorBase: 
        //    DenineBase:
        //    SpecifierBase: RegExp,
        //    ReactionBase: function* () {}.constructor
        //}
        return this;
    }

}
class AccessLawError extends AccessLaw.BASIS.IssueAdapter{

}
class AccessDeninal extends AccessLaw.BASIS.DenineAction{

}
class AccessApproval extends AccessLaw.BASIS.ApproveReach{
    
}


class AccessSpecifier extends AccessLaw.BASIS.Specifier{

}

class AccessRuleset extends AccessLaw.BASIS.RuleProvide{
    constructor(){
        super()
    }
}

class Revoke extends AccessRuleset{

}
class Permit extends AccessRuleset{

}
class Ask extends AccessRuleset{

}
class Prohibit extends AccessRuleset{

}
class Allow extends AccessRuleset{

}
class Grant extends AccessRuleset{

}
class Forbid extends AccessRuleset{

}