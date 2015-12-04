<?php

/* plugin_updated.html */
class __TwigTemplate_c76e14e7682d679668e093bd698287063267343011d483ec59997ebb8a02151e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("layout.html", "plugin_updated.html", 1);
        $this->blocks = array(
            'message' => array($this, 'block_message'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_message($context, array $blocks = array())
    {
        // line 4
        echo "<p>
   Dear ";
        // line 5
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "username", array()), "html", null, true);
        echo ",
</p>
<p>
   The ";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["plugin"]) ? $context["plugin"] : null), "name", array()), "html", null, true);
        echo " plugin, which you are watching on GLPi Plugins, has been updated very recently.<br />
   You might want to check the plugin page.
</p>
<p>
   Plugin page: <a href=\"";
        // line 12
        echo twig_escape_filter($this->env, (isset($context["client_url"]) ? $context["client_url"] : null), "html", null, true);
        echo "/#/plugin/";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["plugin"]) ? $context["plugin"] : null), "key", array()), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["plugin"]) ? $context["plugin"] : null), "name", array()), "html", null, true);
        echo "</a>
</p>
<p>
   If for any reason, you would like to stop following this plugin, you can move your browser to
   the plugin page, which link is in the previous paragraph.<br />
   You can also go to the <a href=\"";
        // line 17
        echo twig_escape_filter($this->env, (isset($context["client_url"]) ? $context["client_url"] : null), "html", null, true);
        echo "/#/panel/notifications\">Notifications settings</a> part of your panel on GLPi Plugins.
</p>
<p>
   Thanks you ";
        // line 20
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "username", array()), "html", null, true);
        echo "
</p>
";
    }

    public function getTemplateName()
    {
        return "plugin_updated.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  65 => 20,  59 => 17,  47 => 12,  40 => 8,  34 => 5,  31 => 4,  28 => 3,  11 => 1,);
    }
}
/* {% extends "layout.html" %}*/
/* */
/* {% block message %}*/
/* <p>*/
/*    Dear {{user.username}},*/
/* </p>*/
/* <p>*/
/*    The {{plugin.name}} plugin, which you are watching on GLPi Plugins, has been updated very recently.<br />*/
/*    You might want to check the plugin page.*/
/* </p>*/
/* <p>*/
/*    Plugin page: <a href="{{client_url}}/#/plugin/{{plugin.key}}">{{plugin.name}}</a>*/
/* </p>*/
/* <p>*/
/*    If for any reason, you would like to stop following this plugin, you can move your browser to*/
/*    the plugin page, which link is in the previous paragraph.<br />*/
/*    You can also go to the <a href="{{client_url}}/#/panel/notifications">Notifications settings</a> part of your panel on GLPi Plugins.*/
/* </p>*/
/* <p>*/
/*    Thanks you {{user.username}}*/
/* </p>*/
/* {% endblock %}*/
